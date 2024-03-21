import { Session } from '../../auth/session';
import { isValidJWTPayload, parseJwt } from '../../auth/jwt';
import { fromUnixTime } from 'date-fns';
import {
  AuthResponseDto,
  ErrorAuthResponseDto,
  LoginDto,
  RegistrationDto,
} from './auth';
import httpClient from '../../http/http-client';

const urlBase = 'users';

export const jwtToSession = (jwt: string): Session | null => {
  const jwtPayload = parseJwt(jwt);
  if (!isValidJWTPayload(jwtPayload)) return null;
  return {
    user_id: jwtPayload.user_id,
    exp: fromUnixTime(jwtPayload.exp).getTime(),
    token: jwt,
  };
};

const login = (
  userLoginData: LoginDto,
): Promise<AuthResponseDto | ErrorAuthResponseDto> =>
  httpClient.post(urlBase + '/login', userLoginData);

const registration = (
  userRegistrationData: RegistrationDto,
): Promise<AuthResponseDto | ErrorAuthResponseDto> =>
  httpClient.post(urlBase + '/register', userRegistrationData);

export const authService = {
  login,
  registration,
};
