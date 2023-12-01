// // import Userfront from '@userfront/toolkit';
// import AuthService from '../authentication/AuthService';

// const BACKEND_URL = 'http://localhost:8000';
// console.log(BACKEND_URL)
// const getAuthorizationHeaders = () => {
//   const token = AuthService.accessToken();
//   return {
//     Authorization: `Bearer ${token}`,
//     // console.log(token),
//     'Content-Type': 'application/json',
//   };
// };


// export const fetchProjects = async () => {
//   const headers = getAuthorizationHeaders();
    
//   try {
//         const response = await fetch(`${BACKEND_URL}/api/projects`, {
//             method: 'GET',
//             headers: headers,
//         });
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} - ${response.statusText}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error:', error);
//         throw error; // Optional: You may want to rethrow the error for the calling code to handle
//     }
// };

// export const addProject = async (projectData) => {
//   const headers = getAuthorizationHeaders();

//   try {
//     const response = await fetch(`${BACKEND_URL}/api/projects`, {
//       method: 'POST',
//       headers: headers,
//       body: JSON.stringify(projectData),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };


// // Add other API functions as needed
