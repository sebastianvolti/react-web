import React, { Component } from 'react';
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


//component controlado, para manejar en donde queremos que quede el focus luego de renderizar
//habitualmente no se usa esto en componentes presentacionales, solo para casos particulares
class  CustomerEdit extends Component  {
   
    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }

    }

    renderField = ({input, meta, type, label, name, withFocus}) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} 
                    type={!type ? "text" : type}
                    ref={withFocus && (txt => { this.txt = txt;} ) } />
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    );    


    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2>Edición del cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus={true}
                        name="name" 
                        component={this.renderField} 
                        label="Nombre"
                        //parse={toUpper}
                        //format={toLower} 
                        >
                    </Field>
                    <Field 
                        name="ci" 
                        component={this.renderField} 
                        validate={[isRequired,isNumber]} 
                        label="CI">
                    </Field>
                    <Field name="age" 
                        component={this.renderField} 
                        type="number"
                        validate={isRequired}
                        label="Edad"
                        parse={toNumber}
                        normalize={onlyGrow} >
                    </Field>

                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>
                            Aceptar
                        </button>
                        <button type="button" disabled={submitting} onClick={onBack}>
                            Cancelar
                        </button>
                    </CustomersActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continúa"></Prompt>
                </form>
            </div>
        );        
    }
};

CustomerEdit.propTypes = {
    name: propTypes.string,
    ci: propTypes.string,
    onBack: propTypes.func.isRequired
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
      //  validate: validate //Para validaciones globales
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);