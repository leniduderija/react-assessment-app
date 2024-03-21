import { PaginationDto } from '../meta/meta';

export interface SightingDto {
  id: number;
  flower_id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export interface SightingResponseDto {
  sightings: SightingDto[];
  meta: PaginationDto;
}
