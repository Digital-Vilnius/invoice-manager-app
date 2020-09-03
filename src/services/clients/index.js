import { store } from 'store';
import axiosInstance from '../axiosInstance';

const CLIENTS_URL = '/clients';

class ClientsService {
  static async getListAsync(request) {
    return axiosInstance.get(CLIENTS_URL, {
      params: { ...request.paging, ...request.filter },
    });
  }

  static async addAsync(request) {
    return axiosInstance.post(CLIENTS_URL, request);
  }

  static async editAsync(request) {
    return axiosInstance.put(CLIENTS_URL, request);
  }

  static async deleteAsync(id) {
    return axiosInstance.delete(`${CLIENTS_URL}/${id}`);
  }

  static async getAsync(id) {
    return axiosInstance.get(`${CLIENTS_URL}/${id}`);
  }

  static findItemById(id) {
    const clients = store.getState().clients.clients;

    if (clients.length > 0) {
      return clients.find(client => client.id === id);
    }
  }
}

export default ClientsService;
