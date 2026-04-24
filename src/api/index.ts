import axios, { type AxiosResponse } from 'axios';
import type { Item } from '../types/types';

export const fetchData = (): Promise<AxiosResponse<Item[]>> =>
  axios.get('http://localhost:3001/items').then((response) => response);

export const addItem = () => {};
