import { InvoiceTypes } from 'types';
import { InvoicesService, FlashMessagesService } from 'services';

export function addInvoice(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: InvoiceTypes.ADD_INVOICE_START });
      await InvoicesService.addAsync(request);
      dispatch({ type: InvoiceTypes.ADD_INVOICE });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvoiceTypes.ADD_INVOICE_ERROR });
    }
  };
}

export function editInvoice(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: InvoiceTypes.EDIT_INVOICE_START });
      await InvoicesService.editAsync(request);
      dispatch({ type: InvoiceTypes.EDIT_INVOICE });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvoiceTypes.EDIT_INVOICE_ERROR });
    }
  };
}

export function deleteInvoice(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: InvoiceTypes.DELETE_INVOICE_START });
      await InvoicesService.deleteAsync(request);
      dispatch({ type: InvoiceTypes.DELETE_INVOICE });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvoiceTypes.DELETE_INVOICE_ERROR });
    }
  };
}

export function getInvoice(id) {
  return async dispatch => {
    try {
      dispatch({ type: InvoiceTypes.GET_INVOICE_START });
      const { result } = await InvoicesService.getAsync(id);
      dispatch({
        type: InvoiceTypes.GET_INVOICE,
        payload: { invoice: result },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvoiceTypes.GET_INVOICE_ERROR });
    }
  };
}
