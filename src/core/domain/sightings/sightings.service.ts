import httpClient from '../../http/http-client';
import { SightingResponseDto } from './sightings';

const urlBase = 'users';

const getUserSightings = (id: number): Promise<SightingResponseDto> =>
  httpClient.get(urlBase + `/${id}/sightings`);

export const sightingsService = {
  getUserSightings,
};
