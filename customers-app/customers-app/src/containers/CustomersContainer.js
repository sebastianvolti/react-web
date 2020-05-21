import React, { Component } from 'react';
import CustomersList from './../components/CustomersList';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';
import { fetchCustomers } from './../actions/fetchCustomers';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { getCustomers } from './../selectors/customers'

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push("/customers/new");
    }
    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: propTypes.func.isRequired,
    customers: propTypes.array.isRequired,
};

const mapDispatchToProps = { fetchCustomers };

CustomersContainer.defaultProps = {
   customers: [ ]
};

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));