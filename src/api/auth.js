// src/api/auth.js
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { API_BASE_URL, API_ENDPOINTS, AUTH_TOKEN_KEY, AUTH_EXPIRATION_KEY } from '../project';

// Helper function to set authentication tokens in local storage
const setAuthTokens = (token, expiration) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_EXPIRATION_KEY, expiration);
};

// Helper function to remove authentication tokens from local storage
const removeAuthTokens = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_EXPIRATION_KEY);
};

// Helper function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const expiration = localStorage.getItem(AUTH_EXPIRATION_KEY);
  return token && expiration && new Date().getTime() < expiration;
};

// Login function
export const login = async (email, password) => {
  const toast = useToast();
  try {
    const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
      email,
      password,
    });
    const { token, expiration } = response.data;
    setAuthTokens(token, expiration);
    return { success: true };
  } catch (error) {
    toast({
      title: 'Login Failed',
      description: error.response.data.error || 'An error occurred during login',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    return { success: false, error: error.response.data.error };
  }
};

// Register function
export const register = async (name, email, password) => {
  const toast = useToast();
  try {
    const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, {
      name,
      email,
      password,
    });
    const { token, expiration } = response.data;
    setAuthTokens(token, expiration);
    return { success: true };
  } catch (error) {
    toast({
      title: 'Registration Failed',
      description: error.response.data.error || 'An error occurred during registration',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    return { success: false, error: error.response.data.error };
  }
};

// Logout function
export const logout = () => {
  removeAuthTokens();
};