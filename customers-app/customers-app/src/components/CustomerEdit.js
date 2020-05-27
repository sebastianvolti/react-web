import React from 'react';
import propTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {setPropsAsInitial} from './../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

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

const toNumber = value => value && Number(value);
//const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && (!previousValue ? value: (value > previousValue ? value : previousValue));

const CustomerEdit = ({name, ci, age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
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
                    parse={toNumber}
                    //format={toLower}
                    normalize={onlyGrow}
                    validate={isNumber}>
                </Field>
                <CustomersActions>
                    <button type="submit" disabled={pristine | submitting}>Aceptar</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomersActions>
                <Prompt
                    when={!pristine && !submitSucceeded} //pristine indica si algo de form cambió
                    message="Se perderán los datos si continúa">
                </Prompt>
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