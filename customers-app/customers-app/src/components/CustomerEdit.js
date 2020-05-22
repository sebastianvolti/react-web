import React from 'react';
import propTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {setPropsAsInitial} from './../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';

const isRequired = value => (
    !value && "Este campo es requerido"
);

const isNumber = value  => (
    isNaN(Number(value)) && "El campo debe ser un número"
);
//componente funcional asociado a un campo en el formulario
const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
           meta.touched && meta.error && <span>{meta.error}</span>   
        }
    </div>
);

//validaciones globales => validaciones a nivel de field, o globales.
//const validate = values => {
//    const error = {};
//    if (!values.name){
//        error.name = "El campo nombre es requerido";
//    }
//
//    if (!values.ci){
//        error.ci = "El campo cédula es requerido";
//    }
//    return error;
//};

const CustomerEdit = ({name, ci, age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    label="Nombre"
                    name="name" 
                    component={MyField} 
                    type="text"
                    validate={isRequired}>    
                </Field>
                <Field 
                    label="CI"
                    name="ci" 
                    component={MyField} 
                    type="text"  
                    validate={[isRequired,isNumber]}>    
                </Field>
                <Field 
                    label="Edad"
                    name="age" 
                    component={MyField} 
                    type="number"
                    validate={isNumber}>
                </Field>
                <CustomersActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomersActions>
            </form>
            <h2>Nombre: {name} / CI: {ci} / Edad: {age} </h2>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: propTypes.string,
    ci: propTypes.string,
    age: propTypes.number,
    onBack: propTypes.func.isRequired
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
      //  validate: validate //Para validaciones globales
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);