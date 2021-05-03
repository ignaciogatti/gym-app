import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { reset } from 'redux-form'     // reset action creator exported by redux-form
import ClientForm from './ClientForm';
import { editClient } from '../../actions';


class ClientEdit extends React.Component{ 

    onSubmit = (values)=>{
        values.nombre = values.nombre.toLowerCase();
        values.apellido = values.apellido.toLowerCase();
        this.props.editClient(values);
    }
    
    render(){
        return (
            <div>
                <h3>Editar Cliente</h3>
                <ClientForm 
                    initialValues={_.pick(this.props.currentClient, 'nombre', 'apellido', 'dni')}
                    onSubmit={this.onSubmit}
                    isEditing={true} 
                />
            </div>
            
        );
    }
}


ClientEdit.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }


  const mapStateToProps = (state) =>{
    return { 
        currentClient: state.currentClient
     };
}


export default connect(mapStateToProps, {editClient, reset})(ClientEdit);