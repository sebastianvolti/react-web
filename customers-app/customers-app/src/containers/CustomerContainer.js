import React, { Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {withRouter, Route} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import { getCustomersByCi } from './../selectors/customers';
import CustomerEdit from './../components/CustomerEdit'
import CustomerData from './../components/CustomerData'
import {fetchCustomers} from './../actions/fetchCustomers';
import {updateCustomer} from './../actions/updateCustomer';
import { SubmissionError } from 'redux-form';

//<p>Datos del Cliente "{this.props.customer.name}"</p>
class CustomerContainer extends Component {
    
    componentDidMount() {
        if (!this.props.customer)
        {
            this.props.fetchCustomers(); //va a buscar todos los clientes y renderiza
        }   
    }

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomer(id, values).then( r => {
            if (r.error){
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    
    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:ci/edit" children={
            ({ match }) =>{
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} 
                                        onSubmit={this.handleSubmit} 
                                        onSubmitSuccess={this.handleOnSubmitSuccess}
                                        onBack={this.handleOnBack}/>
                //return <CustomerControl initialValues={this.props.customer} />  asi anda, pasando valores iniciales
                                                                                 // pero no sirve de nada validar props del lado del componente
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
    customer: propTypes.object,
    fetchCustomers: propTypes.func.isRequired,
    updateCustomer: propTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByCi(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer
})(CustomerContainer));