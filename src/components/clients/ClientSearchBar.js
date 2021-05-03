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
    return errors
  }
  

class ClientSearchBar extends React.Component{


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
                <button className="ui primary button" type="submit" disabled={pristine || submitting}>Buscar</button>
                <button className="ui button" type="button" disabled={pristine || submitting} onClick={reset}>
                    Borrar
                </button>
            </div>
          </form>
        )
      }

}

ClientSearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }


  export default reduxForm({
    form: 'clientSearchBar',
    validate
})(ClientSearchBar);
