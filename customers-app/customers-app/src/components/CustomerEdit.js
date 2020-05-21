import React from 'react';
import propTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const CustomerEdit = ({name, ci, age}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="ci">CI: </label>
                    <Field name="ci" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad: </label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
            <h3>Nombre:{name} / CI:{ci} / Edad:{age} </h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: propTypes.string,
    ci: propTypes.string,
    age: propTypes.number,
};

export default reduxForm({ form: 'CustomerEdit'})(CustomerEdit);