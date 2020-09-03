import update from 'immutability-helper';
import { ClientTypes, AuthTypes } from 'types';

const initialState = {
  client: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ClientTypes.ADD_CLIENT_START:
    case ClientTypes.EDIT_CLIENT_START:
    case ClientTypes.DELETE_CLIENT_START:
    case ClientTypes.GET_CLIENT_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case ClientTypes.ADD_CLIENT_ERROR:
    case ClientTypes.EDIT_CLIENT_ERROR:
    case ClientTypes.DELETE_CLIENT_ERROR:
    case ClientTypes.GET_CLIENT_ERROR:
    case AuthTypes.LOGOUT: {
      return initialState;
    }

    case ClientTypes.ADD_CLIENT:
    case ClientTypes.EDIT_CLIENT:
    case ClientTypes.DELETE_CLIENT: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case ClientTypes.GET_CLIENT: {
      return update(state, {
        isLoading: { $set: false },
        client: { $set: payload.client },
      });
    }

    default:
      return state;
  }
};
