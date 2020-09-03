import { store } from 'store';
import axiosInstance from '../axiosInstance';

const INVOICES_URL = '/invoices';

class InvoicesService {
  static async getListAsync(request) {
    return axiosInstance.get(INVOICES_URL, {
      params: { ...request.paging, ...request.filter },
    });
  }

  static async addAsync(request) {
    return axiosInstance.post(INVOICES_URL, request);
  }

  static async editAsync(request) {
    return axiosInstance.put(INVOICES_URL, request);
  }

  static async deleteAsync(id) {
    return axiosInstance.delete(`${INVOICES_URL}/${id}`);
  }

  static async getAsync(id) {
    return axiosInstance.get(`${INVOICES_URL}/${id}`);
  }

  static findItemById(id) {
    const invoices = store.getState().invoices.invoices;

    if (invoices.length > 0) {
      return invoices.find(invoice => invoice.id === id);
    }
  }
}

export default InvoicesService;
