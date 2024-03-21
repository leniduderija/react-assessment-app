import { UserDto } from '../user/user';

export interface RegistrationDto
  extends Omit<UserDto, 'id' | 'email' | 'date_of_birth'> {
  email: string;
  password: string;
  date_of_birth: string | Date;
}

export type LoginDto = Pick<RegistrationDto, 'email' | 'password'>;

export interface AuthResponseDto {
  auth_token: string;
}

export interface ErrorAuthResponseDto extends AuthResponseDto {
  error: string;
}
