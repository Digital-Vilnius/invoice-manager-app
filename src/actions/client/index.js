import { ClientTypes } from 'types';
import { ClientsService, FlashMessagesService } from 'services';

export function addClient(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: ClientTypes.ADD_CLIENT_START });
      await ClientsService.addAsync(request);
      dispatch({ type: ClientTypes.ADD_CLIENT });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ClientTypes.ADD_CLIENT_ERROR });
    }
  };
}

export function editClient(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: ClientTypes.EDIT_CLIENT_START });
      await ClientsService.editAsync(request);
      dispatch({ type: ClientTypes.EDIT_CLIENT });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ClientTypes.EDIT_CLIENT_ERROR });
    }
  };
}

export function deleteClient(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: ClientTypes.DELETE_CLIENT_START });
      await ClientsService.deleteAsync(request);
      dispatch({ type: ClientTypes.DELETE_CLIENT });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ClientTypes.DELETE_CLIENT_ERROR });
    }
  };
}

export function getClient(id) {
  return async dispatch => {
    try {
      dispatch({ type: ClientTypes.GET_CLIENT_START });
      const { result } = await ClientsService.getAsync(id);
      dispatch({
        type: ClientTypes.GET_CLIENT,
        payload: { client: result },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ClientTypes.GET_CLIENT_ERROR });
    }
  };
}
