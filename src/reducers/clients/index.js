import update from 'immutability-helper';
import { ClientsTypes, AuthTypes } from 'types';

const initialState = {
  clients: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ClientsTypes.GET_CLIENTS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case ClientsTypes.REFRESH_CLIENTS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case AuthTypes.LOGOUT:
    case ClientsTypes.GET_CLIENTS_ERROR:
    case ClientsTypes.REFRESH_CLIENTS_ERROR: {
      return initialState;
    }

    case ClientsTypes.REFRESH_CLIENTS: {
      return update(state, {
        isRefreshing: { $set: false },
        clients: { $set: payload.clients },
        count: { $set: payload.count },
      });
    }

    case ClientsTypes.GET_CLIENTS: {
      const clients = state.clients;
      return update(state, {
        isLoading: { $set: false },
        clients: { $set: clients.concat(payload.clients) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
