import { useLocalStorage } from './useLocalStorage';
import { Session } from '../../core/auth/session';

export const SESSION_KEY = 'react-assessment-app.user.session';
export const useSession = () => {
  const { getItem, setItem, removeItem } = useLocalStorage();

  const getSession = (): Session | null => {
    const item = getItem(SESSION_KEY);
    return item && JSON.parse(item);
  };

  const setSession = (session: Session | null) => {
    setItem(SESSION_KEY, JSON.stringify(session));
  };

  const clearSession = () => {
    removeItem(SESSION_KEY);
  };

  const hasSessionExpired = (expiresAt: number): boolean => {
    return new Date().getTime() > expiresAt;
  };

  return { getSession, setSession, clearSession, hasSessionExpired };
};
