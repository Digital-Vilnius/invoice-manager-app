import { AccountsService, FlashMessagesService } from 'services';
import { AccountTypes } from 'types';

export function getAccount(id, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: AccountTypes.GET_ACCOUNT_START });
      const { result } = await AccountsService.getAsync(id);
      dispatch({
        type: AccountTypes.GET_ACCOUNT,
        payload: { account: result },
      });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountTypes.GET_ACCOUNT_ERROR });
    }
  };
}
