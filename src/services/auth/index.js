import axiosInstance from '../axiosInstance';

class AuthService {
  static async loginAsync(request) {
    return axiosInstance.post('/authentication/login', request);
  }

  static async getAsync() {
    return axiosInstance.get('/authentication/logged-user');
  }
}

export default AuthService;
