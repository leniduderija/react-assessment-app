import httpClient from "../../http/http-client";
import {
  ErrorUserResponseDto,
  UserDto,
  UserLoginDto,
  UserRegistrationDto,
  UserResponseDto,
} from "./user";

const urlBase = "users";
const getUser = (): Promise<UserDto> => httpClient.get(urlBase + "/me");

const userLogin = (
  userLoginData: UserLoginDto,
): Promise<UserResponseDto | ErrorUserResponseDto> =>
  httpClient.post(urlBase + "/me", userLoginData);

const userRegistration = (
  userRegistrationData: UserRegistrationDto,
): Promise<UserResponseDto | ErrorUserResponseDto> =>
  httpClient.post(urlBase + "/me", userRegistrationData);

export const userService = {
  getUser,
  userLogin,
  userRegistration,
};
