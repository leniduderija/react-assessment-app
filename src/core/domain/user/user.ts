import { SightingDto } from '../sightings/sightings';

export interface UserResponseDto {
  user: UserDto;
}

export interface UserDto {
  id: number;
  first_name: string;
  last_name: string;
  avatar?: string;
  email?: string;
  date_of_birth?: string;
}

export interface UserWithSightingsDto extends UserDto {
  sightings: SightingDto[];
}
