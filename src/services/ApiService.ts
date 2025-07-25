import axios, { type AxiosResponse } from 'axios';
import type { Product } from '@/types';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getProducts(): Promise<AxiosResponse<Product[]>> {
    return apiClient.get('/products');
  }
};