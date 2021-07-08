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

    renderDayOption(){

      const days =[...Array(31).keys()];

      return days.map(day =>{

        return(
          <option>{day+1}</option>
        );
      });

    }


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
              <label>Fecha de nacimiento</label>
              <div>
                <Field
                    name="fechaNacimiento"
                    component="input"
                    type="date"
                    placeholder="FechaNacimiento"
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
              <label>Teléfono</label>
              <div>
                <Field
                    name="telefono"
                    component="input"
                    type="text"
                    placeholder=" e.j: 02281 021564"
                />
              </div>
            </div>
            <div>
              <label>Fecha de pago temprana</label>
              <div>
              <Field
                    name="fechaPagoTemprana"
                    component="select"
                >
                <option />
                {
                  this.renderDayOption()
                }
              </Field>
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


