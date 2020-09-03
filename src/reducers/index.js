import { combineReducers } from 'redux';
import auth from './auth';
import accounts from './accounts';
import account from './account';
import clients from './clients';
import client from './client';
import invoices from './invoices';
import invoice from './invoice';

const rootReducer = combineReducers({
  auth,
  accounts,
  account,
  clients,
  client,
  invoices,
  invoice,
});

export { rootReducer };
