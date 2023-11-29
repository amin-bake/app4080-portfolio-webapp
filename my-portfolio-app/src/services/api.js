import Userfront from '@userfront/react';

const BACKEND_URL = import.meta.env.BACKEND_URL;

const getAuthorizationHeaders = () => {
  const token = Userfront.accessToken();
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};


export const fetchProjects = async () => {
  const headers = getAuthorizationHeaders();
    
  try {
        const response = await fetch(`${BACKEND_URL}/api/projects`, {
            method: 'GET',
            headers: headers,
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error; // Optional: You may want to rethrow the error for the calling code to handle
    }
};

// Add other API functions as needed
