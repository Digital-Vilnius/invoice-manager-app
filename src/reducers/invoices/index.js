import update from 'immutability-helper';
import { InvoicesTypes, AuthTypes } from 'types';

const initialState = {
  invoices: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case InvoicesTypes.GET_INVOICES_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case InvoicesTypes.REFRESH_INVOICES_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case AuthTypes.LOGOUT:
    case InvoicesTypes.GET_INVOICES_ERROR:
    case InvoicesTypes.REFRESH_INVOICES_ERROR: {
      return initialState;
    }

    case InvoicesTypes.REFRESH_INVOICES: {
      return update(state, {
        isRefreshing: { $set: false },
        invoices: { $set: payload.invoices },
        count: { $set: payload.count },
      });
    }

    case InvoicesTypes.GET_INVOICES: {
      const invoices = state.invoices;
      return update(state, {
        isLoading: { $set: false },
        invoices: { $set: invoices.concat(payload.invoices) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
