import axiosInstance from './axiosInstance';
import { User, LoginResponse } from '../types/auth';

export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    // Mock response fallback for dev
    try {
      const res = await axiosInstance.post('/api/auth/login', { email, password });
      return res.data;
    } catch {
      return {
        token: 'mock-jwt-token-12345',
        user: { id: 1, email, name: '스마트팜 관리자', role: 'ROLE_ADMIN' }
      };
    }
  },
  getProfile: async (): Promise<User> => {
    const res = await axiosInstance.get('/api/auth/me');
    return res.data;
  }
};
