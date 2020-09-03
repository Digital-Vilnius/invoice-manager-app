import update from 'immutability-helper';
import { AccountTypes, AuthTypes } from 'types';

const initialState = {
  account: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AccountTypes.GET_ACCOUNT_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AuthTypes.LOGOUT:
    case AccountTypes.GET_ACCOUNT_ERROR: {
      return initialState;
    }

    case AccountTypes.GET_ACCOUNT: {
      return update(state, {
        isLoading: { $set: false },
        account: { $set: payload.account },
      });
    }

    default:
      return state;
  }
};
