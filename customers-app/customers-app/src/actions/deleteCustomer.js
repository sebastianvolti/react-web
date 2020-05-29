import { createAction } from 'redux-actions';
import { DELETE_CUSTOMER} from './../constants/index';
import { urlCustomers } from './../api/urls';
import { apiDelete } from '../api';

export const deleteCustomer = createAction(DELETE_CUSTOMER, 
    (id) => apiDelete(urlCustomers, id)() );