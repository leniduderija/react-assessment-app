export interface UserDto {
  id: number;
  first_name: string;
  last_name: string;
}

export interface UserRegistrationDto extends Omit<UserDto, "id"> {
  email: string;
  password: string;
  date_of_birth: string | Date;
}

export type UserLoginDto = Pick<UserRegistrationDto, "email" | "password">;

export interface UserResponseDto {
  auth_token: string;
}

export interface ErrorUserResponseDto extends UserResponseDto {
  error: string;
}
