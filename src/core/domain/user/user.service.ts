import httpClient from '../../http/http-client';
import { UserResponseDto } from './user';

const urlBase = 'users';
const getUser = (): Promise<UserResponseDto> => httpClient.get(urlBase + '/me');

export const userService = {
  getUser,
};
