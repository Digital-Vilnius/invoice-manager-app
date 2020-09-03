import update from 'immutability-helper';
import { InvoiceTypes, AuthTypes } from 'types';

const initialState = {
  invoice: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case InvoiceTypes.ADD_INVOICE_START:
    case InvoiceTypes.EDIT_INVOICE_START:
    case InvoiceTypes.DELETE_INVOICE_START:
    case InvoiceTypes.GET_INVOICE_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case InvoiceTypes.ADD_INVOICE_ERROR:
    case InvoiceTypes.EDIT_INVOICE_ERROR:
    case InvoiceTypes.DELETE_INVOICE_ERROR:
    case InvoiceTypes.GET_INVOICE_ERROR:
    case AuthTypes.LOGOUT: {
      return initialState;
    }

    case InvoiceTypes.ADD_INVOICE:
    case InvoiceTypes.EDIT_INVOICE:
    case InvoiceTypes.DELETE_INVOICE: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case InvoiceTypes.GET_INVOICE: {
      return update(state, {
        isLoading: { $set: false },
        invoice: { $set: payload.invoice },
      });
    }

    default:
      return state;
  }
};
