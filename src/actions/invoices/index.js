import { InvoicesService, FlashMessagesService } from 'services';
import { InvoicesTypes } from 'types';

export function getInvoices(request) {
  return async dispatch => {
    try {
      dispatch({ type: InvoicesTypes.GET_INVOICES_START });
      const { result, count } = await InvoicesService.getListAsync(request);
      dispatch({
        type: InvoicesTypes.GET_INVOICES,
        payload: { invoices: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvoicesTypes.GET_INVOICES_ERROR });
    }
  };
}

export function refreshInvoices(request) {
  return async dispatch => {
    try {
      dispatch({ type: InvoicesTypes.REFRESH_INVOICES_START });
      const { result, count } = await InvoicesService.getListAsync(request);
      dispatch({
        type: InvoicesTypes.REFRESH_INVOICES,
        payload: { invoices: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvoicesTypes.REFRESH_INVOICES_ERROR });
    }
  };
}
