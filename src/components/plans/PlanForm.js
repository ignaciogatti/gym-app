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

class PlanForm extends React.Component {



    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
          <form className="ui form error" onSubmit={handleSubmit} >
            <div>
              <label>Nombre</label>
              <div>
                <Field
                    name="nombre"
                    component="input"
                    type="text"
                    placeholder="Nombre"
                    disabled={this.props.isEditing}
                />
            </div>

            </div>
            <div>
              <label>Monto</label>
              <div>
                <Field
                    name="monto"
                    component="input"
                    type="text"
                    pattern="[0-9]*"
                    placeholder="Monto"
                />
                </div>
            </div>
            <div>
              <label>Monto con descuento</label>
              <div>
                <Field
                    name="montoDescuento"
                    component="input"
                    type="text"
                    pattern="[0-9]*"
                    placeholder="Monto con descuento"
                />
              </div>
            </div>
            
            <div>
                <button className="ui primary button" type="submit" disabled={pristine || submitting}>Guardar</button>
                <button className="ui button" type="button" disabled={pristine || submitting} onClick={reset}>
                    Borrar
                </button>
            </div>
          </form>
        )
      }

}


PlanForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

export default reduxForm({
    form: 'planForm',
    validate
})(PlanForm);