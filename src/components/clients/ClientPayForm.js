import React from 'react';
import {fetchPlans} from '../../actions';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const validate = values => {
  const errors = {}
  if (!values.mes) {
    errors.mes = 'Debes ingresar mes'
  }
  if (!values.monto) {
    errors.monto = 'Debes ingresar un monto'
  } 
  return errors
}

const meses ={
  'Enero' : 0,
  'Febrero' : 1,
  'Marzo' : 2,
  'Abril' : 3,
  'Mayo' : 4,
  'Junio' : 5,
  'Julio' : 6,
  'Agosto' : 7,
  'Septiembre' : 8,
  'Octubre' : 9,
  'Noviembre' : 10,
  'Diciembre' : 11
}

class ClientPayForm extends React.Component {

  state = { month : 0}

  componentDidMount(){
    this.props.fetchPlans();
    this.props.initialize({ monto: '0.0' });
  }

  handleMonthChange(value){
    this.setState({month: meses[value]});

  }


  render() {

    const { handleSubmit, pristine, reset, submitting, change, selectedPlans = [] } = this.props;

    const handleUnitChange = (event, value) => {
      const selectedPlan = this.props.plans.filter(p => {return p.nombre === value});
      //Check if pay with discount or not
      const currentDay = new Date();
      const earlyPaymentDay = new Date();
      earlyPaymentDay.setDate(this.props.currentClient.fechaPagoTemprana);
      earlyPaymentDay.setMonth(this.state.month);
      let montoAPagar = 0;
      if (currentDay <= earlyPaymentDay){
        montoAPagar = selectedPlan[0].montoDescuento;
      }else{
        montoAPagar = selectedPlan[0].monto;
      }

      const newMonto = [ ...selectedPlans, montoAPagar ];
      change('monto', newMonto);
    }

    return (
      <form className="ui form error" onSubmit={handleSubmit} >
        <div>
          <label>Mes</label>
          <div>
            <Field
                name="mes"
                component="select"
                onChange={(event,value)=> this.handleMonthChange(value) }
            >
            <option />
            <option >Enero</option>
            <option >Febrero</option>
            <option >Marzo</option>
            <option >Abril</option>
            <option >Mayo</option>
            <option >Junio</option>
            <option >Julio</option>
            <option >Agosto</option>
            <option >Septiembre</option>
            <option >Octubre</option>
            <option >Noviembre</option>
            <option >Diciembres</option>
          </Field>
          </div>
        </div>
        <div>
          <label>Forma de pago</label>
          <div>
            <Field
                name="formaPago"
                component="select"
            >
            <option />
            <option >Efectivo</option>
            <option >Tarjeta</option>
          </Field>
          </div>
        </div>

        <div>
          <label>Plan</label>
          <div>
            <Field
                name="Plan"
                component="select"
                onChange={handleUnitChange}
            >
            <option />
            {this.props.plans.map(plan =>{
              return(
                <option>
                  {plan.nombre}
                </option>
              )
            })}
          </Field>
          </div>
        </div>
        
        <div>
          <label>Monto</label>
          <div>
            <Field
                name="monto"
                component="input"
                type="text"
                placeholder="Monto"
            />
          </div>
        </div>
        <div>
            <button className="ui primary button" type="submit" disabled={pristine || submitting}>Pagar</button>
            <button className="ui button" type="button" disabled={pristine || submitting} onClick={reset}>
                Borrar
            </button>
        </div>
      </form>
        )
      }

}


ClientPayForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  const mapStateToProps = (state) =>{
    return { 
        plans : state.plans,
        currentClient: state.currentClient
     };
}

ClientPayForm = connect(mapStateToProps, {fetchPlans})(ClientPayForm);

export default reduxForm({
    form: 'clientPayForm',
    validate
})(ClientPayForm);


