import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { reset } from 'redux-form'     // reset action creator exported by redux-form
import PlanForm from './PlanForm';
import { editPlan } from '../../actions';


class PlanEdit extends React.Component{ 

    onSubmit = (values)=>{
        values.monto = parseFloat(values.monto);
        values.montoDescuento = parseFloat(values.montoDescuento);
        this.props.editPlan({'nombre': this.props.currentPlan.nombre }, values);
    }
    
    render(){

        console.log(this.props.currentPlan);
        return (
            <div>
                <h3>Editar Plan</h3>
                <PlanForm 
                    initialValues={_.pick(this.props.currentPlan, 'nombre', 'monto','montoDescuento')}
                    onSubmit={this.onSubmit}
                    isEditing={true} 
                />
            </div>
            
        );
    }
}


PlanEdit.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }


  const mapStateToProps = (state) =>{
    return { 
        currentPlan: state.currentPlan
     };
}


export default connect(mapStateToProps, {editPlan, reset})(PlanEdit);