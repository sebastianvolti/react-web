import React, { Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {withRouter, Route} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import { getCustomersByCi } from './../selectors/customers';
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from './../components/CustomerData'

//<p>Datos del Cliente "{this.props.customer.name}"</p>
class CustomerContainer extends Component {
    
    renderBody = () => (
        <Route path="/customers/:ci/edit" children={
            ({ match }) =>{
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl { ...this.props.customer} />  
            }
         }>
        </Route>
    );

    render(){
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.ci}`}
                    body={this.renderBody()} >
                </AppFrame>
            </div>
        );
    }
};

CustomerContainer.propTypes = {
    ci: propTypes.string.isRequired,
    customer: propTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByCi(state, props)
});

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));