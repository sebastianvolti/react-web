import React, { Component } from 'react';
import CustomersList from './../components/CustomersList';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';

const customers = [
    {
    "ci":"51759147",
    "name":"Sebastián Volti",
    "age":"25"
    },
    {
    "ci":"11111111",
    "name":"Juan Perez",
    "age":"30"
    },
    {
    "ci":"22222222",
    "name":"Juan Rodriguez",
    "age":"30"
    },
    {
    "ci":"33333333",
    "name":"Lucia Gonzalez",
    "age":"35"
    }
];

class CustomersContainer extends Component {
    
    handleAddNew = () => {
        this.props.history.push("/customers/new");
    }
    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customer/'}>
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
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    
};

export default withRouter(CustomersContainer);