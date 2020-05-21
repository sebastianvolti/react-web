import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomersByCi = createSelector(
    (state, props) => state.customers.find( c => c.ci === props.ci),
    customer => customer
);