// frontend/utils/api.ts
import axios from 'axios';

// Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register API call
export const register = async (data: { name: string, email: string, password: string, role: string }) => {
  return api.post('/api/signup', data);
};

// Login API call
export const login = async (data: { email: string, password: string }) => {
  return api.post('/api/login', data);
};

// Example of a protected API call (e.g., fetching user data)
export const getUserData = async () => {
  const token = localStorage.getItem('token');
  return api.get('/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
