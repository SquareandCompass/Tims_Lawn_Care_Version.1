import jwt_decode from 'jwt-decode';

export const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = jwt_decode(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

import { api, setToken } from './api/api';

export const refreshToken = async () => {
  try {
    const response = await api.post('/auth/refresh-token');
    const newToken = response.data.token;
    setToken(newToken);
    return newToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    throw error;
  }
};

