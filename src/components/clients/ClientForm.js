import React from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';

const validate = values => {
  const errors = {}
  if (!values.nombre) {
    errors.nombre = 'Debes ingresar un nombre'
  }
  if (!values.apellido) {
    errors.apellido = 'Debes ingresar un apellido'
  } 
  if (!values.dni) {
    errors.dni = 'Debes ingresar un dni'
  }
  return errors
}

class ClientForm extends React.Component {


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
                />
            </div>

            </div>
            <div>
              <label>Apellido</label>
              <div>
                <Field
                    name="apellido"
                    component="input"
                    type="text"
                    placeholder="Apellido"
                />
                </div>
            </div>
            <div>
              <label>DNI</label>
              <div>
                <Field
                    name="dni"
                    component="input"
                    type="text"
                    placeholder="DNI"
                    disabled={this.props.isEditing}
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


ClientForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

export default reduxForm({
    form: 'clientForm',
    validate
})(ClientForm);


