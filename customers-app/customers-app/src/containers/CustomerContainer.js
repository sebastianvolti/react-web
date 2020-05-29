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
import {deleteCustomer} from './../actions/deleteCustomer';
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

    handleOnDelete = id => {
        console.log("handleOnDelete");
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderCustomerControl = (isEdit, isDelete) => {
        if (this.props.customer){
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            return <CustomerControl {...this.props.customer} 
                                    onSubmit={this.handleSubmit} 
                                    onSubmitSuccess={this.handleOnSubmitSuccess}
                                    onBack={this.handleOnBack}
                                    isDeleteAllow={!!isDelete} //doble negacion, trusly => false real => true, falsy => true real => false
                                    onDelete={this.handleOnDelete}/> 
            //return <CustomerControl initialValues={this.props.customer} />  asi anda, pasando valores iniciales                                                                 // pero no sirve de nada validar props del lado del componente
        }
        return null;
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    
    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:ci/edit" children={
            ( { match: isEdit } ) => (  //aqui renombro match como isEdit
                <Route path="/customers/:ci/del" children={
                    ( { match: isDelete } ) => (  //aqui renombro match como isDelete
                        this.renderCustomerControl(isEdit, isDelete))
            } /> )
        } />
    )

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
    deleteCustomer: propTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByCi(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));