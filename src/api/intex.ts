import axios, { type AxiosResponse } from 'axios';
import type { IData } from '../types/types';

export const fetchData = (): Promise<AxiosResponse<IData>> =>
  axios.get('data/items.json').then((response) => response);
