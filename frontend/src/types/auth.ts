export interface User {
  id: number;
  email: string;
  name: string;
  role: 'ROLE_USER' | 'ROLE_ADMIN';
}

export interface LoginResponse {
  token: string;
  user: User;
}
