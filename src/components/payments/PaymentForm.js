import React from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';

const validate = values => {
  const errors = {}
  if (!values.nombre) {
    errors.nombre = 'Debes ingresar un nombre'
  }
  if (!values.monto) {
    errors.apellido = 'Debes ingresar un apellido'
  } 
  if (!values.montoDescuento) {
    errors.dni = 'Debes ingresar un dni'
  }
  return errors
}

class PaymentForm extends React.Component {



    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
          <form className="ui form error" onSubmit={handleSubmit} >
            <div>
              <label>Desde</label>
              <div>
              <Field
                    name="fechaInicio"
                    component="input"
                    type="date"
                    placeholder="FechaInicio"
                />
            </div>

            </div>
            <div>
              <label>Hasta</label>
              <div>
              <Field
                    name="fechaFin"
                    component="input"
                    type="date"
                    placeholder="FechaFin"
                />
                </div>
            </div>
            
            <div>
                <button className="ui primary button" type="submit" disabled={pristine || submitting}>Buscar</button>
                <button className="ui button" type="button" disabled={pristine || submitting} onClick={reset}>
                    Borrar
                </button>
            </div>
          </form>
        )
      }

}


PaymentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

export default reduxForm({
    form: 'paymentForm',
    validate
})(PaymentForm);