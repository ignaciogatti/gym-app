import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form'     // reset action creator exported by redux-form
import PropTypes from 'prop-types';

import { createClient } from '../../actions';
import ClientForm from './ClientForm';



class ClientCreate extends React.Component {
  
  onSubmit = (values)=>{
    values.nombre = values.nombre.toLowerCase();
    values.apellido = values.apellido.toLowerCase();
    this.props.createClient(values);
}
    
    render(){
        
        return (
            <div>
                <h3>Crear Cliente</h3>
                <ClientForm ref="myForm" onSubmit={this.onSubmit}/>
            </div>
            
        );
    }
}


ClientCreate.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }


export default connect(null, {createClient, reset})(ClientCreate);