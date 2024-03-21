import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { UserWithSightingsDto } from '../domain/user/user';
import { Session } from './session';
import { userService } from '../domain/user/user.service';
import { authService, jwtToSession } from '../domain/auth/auth.service';
import { AuthResponseDto, LoginDto } from '../domain/auth/auth';
import { useSession } from '../../utils/hooks/useSession';
import { sightingsService } from '../domain/sightings/sightings.service';

export interface AuthProviderProps {
  children: ReactNode;
}
export interface AuthState {
  isAuthenticated: boolean;
  user: UserWithSightingsDto | null;
  login: (loginData: LoginDto) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthState>({
  isAuthenticated: false,
  user: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getSession, setSession, clearSession, hasSessionExpired } =
    useSession();
  const [userSession, setUserSession] = useState<Session | null>(() =>
    getSession(),
  );
  const [user, setUser] = useState<UserWithSightingsDto | null>(null);

  useEffect(() => {
    if (userSession) {
      userService.getUser().then((response) => {
        const user = response.user;
        sightingsService
          .getUserSightings(user.id)
          .catch((error) => error)
          .then((response) => {
            const userWithSigtings: UserWithSightingsDto = {
              ...user,
              sightings: response.sightings,
            };
            userWithSigtings.sightings = response.sightings;
            setUser(userWithSigtings);
          });
      });
    }
  }, [userSession]);

  const value = useMemo(() => {
    const reload = () => setUserSession(getSession());

    const loginSuccessCallback = (response: AuthResponseDto) => {
      const token = response.auth_token;
      if (!token) throw new Error('No auth token.');
      const session = jwtToSession(token);
      if (!session) throw new Error('Invalid token.');
      setSession(session);
      reload();
    };

    const logoutCallback = (): Promise<void> => {
      clearSession();
      setUser(null);
      return Promise.resolve();
    };

    return {
      isAuthenticated: !!userSession && !hasSessionExpired(userSession.exp),
      user,
      login: (loginData: LoginDto) =>
        authService
          .login(loginData)
          .catch((error) => error)
          .then(loginSuccessCallback),
      logout: () => logoutCallback().then(reload),
    };
  }, [
    clearSession,
    getSession,
    hasSessionExpired,
    setSession,
    user,
    userSession,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
