import { FlowersResponseDto } from './flowers';
import httpClient from '../../http/http-client';

const getFlowers = (): Promise<FlowersResponseDto> => httpClient.get('flowers');

export const flowersService = {
  getFlowers,
};
