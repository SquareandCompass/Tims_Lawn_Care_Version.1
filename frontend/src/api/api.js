// File: src/api/api.js
// Description: This file sets up an Axios instance for API requests, handles authentication tokens, and defines API functions.

import axios from 'axios';
import { isTokenExpired, refreshToken } from '../tokenUtils'; // Import utility functions for token handling

const API_BASE_URL = 'http://localhost:5000/api/api';

// Function to set and format the token properly
export const setToken = newToken => {
  const formattedToken = `Bearer ${newToken}`; // Format the token with the Bearer prefix
  localStorage.setItem('token', formattedToken); // Save the formatted token to localStorage
  axios.defaults.headers.common['x-auth-token'] = formattedToken; // Set default header for Axios requests
};

// Function to initialize the token from localStorage when the app loads.
export const initializeToken = () => {
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    axios.defaults.headers.common['x-auth-token'] = storedToken; // Use stored token as default header
  }
};

// Create an Axios instance with a base URL.
export const api = axios.create({
  baseURL: API_BASE_URL,
});

// First interceptor to attach the token from localStorage if available
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token; // Set the token in the x-auth-token header for each request
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Second interceptor to handle token expiration and refreshing
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token && isTokenExpired(token)) {
      try {
        const newToken = await refreshToken(); // Attempt to refresh the token
        config.headers['x-auth-token'] = `Bearer ${newToken}`; // Reformat and set the new token
        setToken(newToken); // Update the token in localStorage and Axios defaults
      } catch (error) {
        console.error('Token refresh failed:', error); // Log the error
        // Implement additional logic here, such as logging out the user or redirecting to a login page
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API functions
export const getServices = async () => {
  try {
    const response = await api.get(`/services`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post(`/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// ... other API functions