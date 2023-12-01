// AuthService.js

class AuthService {
    static setToken(token) {
      localStorage.setItem('token', token);
    }
  
    static getToken() {
      return localStorage.getItem('token');
    }
  }
  
  export default AuthService;
  