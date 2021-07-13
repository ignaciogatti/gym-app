import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form'     // reset action creator exported by redux-form
import PropTypes from 'prop-types';

import { createPlan } from '../../actions';
import PlanForm from './PlanForm';



class PlanCreate extends React.Component {
  
  onSubmit = (values)=>{
    values.nombre = values.nombre.toLowerCase();
    values.monto = parseFloat(values.monto);
    values.montoDescuento = parseFloat(values.montoDescuento);
    this.props.createPlan(values);
}
    
    render(){
        
        return (
            <div>
                <h3>Crear Plan</h3>
                <PlanForm 
                    ref="myForm" 
                    onSubmit={this.onSubmit} 
                    isEditing={false
                }/>
            </div>
            
        );
    }
}


PlanCreate.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }


export default connect(null, {createPlan, reset})(PlanCreate);