import { PaginationDto } from '../meta/meta';

export interface FlowerDto {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
}

export interface FlowersResponseDto {
  flowers: FlowerDto[];
  meta: PaginationDto;
}
