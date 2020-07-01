import { api } from '.';
import IResponse from '../models/Response';
import IMeterResponse from '../models/MeterResponse';

const METER_MOCK_URI = '47dde2a2-12ec-47d4-911f-9f23853698c3'

export const fetchMeterData = async () => {
  const response: IResponse<IMeterResponse> = (await api.get(METER_MOCK_URI)).data;

  return response.data.distances;
}