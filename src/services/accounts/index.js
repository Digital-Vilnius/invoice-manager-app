import axiosInstance from '../axiosInstance';
import { store } from 'store';

const ACCOUNTS_URL = '/accounts';

class AccountsService {
  static async getAsync(id) {
    return axiosInstance.get(`${ACCOUNTS_URL}/${id}`);
  }

  static async getListAsync(request) {
    return axiosInstance.get(ACCOUNTS_URL, {
      params: { ...request.paging, ...request.filter },
    });
  }

  static findItemById(id) {
    const accounts = store.getState().accounts.accounts;

    if (accounts.length > 0) {
      return accounts.find(account => account.id === id);
    }
  }
}

export default AccountsService;
