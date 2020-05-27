import { createAction } from 'redux-actions';
import { UPDATE_CUSTOMER} from './../constants/index';
import { urlCustomers } from './../api/urls';
import { apiPut } from '../api';

export const updateCustomer = createAction(UPDATE_CUSTOMER, 
    (id,customer) => apiPut(urlCustomers, id, customer)() );