import { ClientsService, FlashMessagesService } from 'services';
import { ClientsTypes } from 'types';

export function getClients(request) {
  return async dispatch => {
    try {
      dispatch({ type: ClientsTypes.GET_CLIENTS_START });
      const { result, count } = await ClientsService.getListAsync(request);
      dispatch({
        type: ClientsTypes.GET_CLIENTS,
        payload: { clients: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ClientsTypes.GET_CLIENTS_ERROR });
    }
  };
}

export function refreshClients(request) {
  return async dispatch => {
    try {
      dispatch({ type: ClientsTypes.REFRESH_CLIENTS_START });
      const { result, count } = await ClientsService.getListAsync(request);
      dispatch({
        type: ClientsTypes.REFRESH_CLIENTS,
        payload: { clients: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ClientsTypes.REFRESH_CLIENTS_ERROR });
    }
  };
}
