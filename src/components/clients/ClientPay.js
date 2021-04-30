import React from 'react';
import {connect} from 'react-redux';
import { reset } from 'redux-form'     // reset action creator exported by redux-form
import {makePayment} from '../../actions';
import ClientPayForm from './ClientPayForm';
import PropTypes from 'prop-types';


class ClientPay extends React.Component {

    onSubmit = (values)=>{
        values = {...values,
        dni: this.props.currentClient.dni
    };

    values.monto = parseFloat(values.monto);

    this.props.makePayment(values);

    }

    render(){
        
        return (
            <div>
                <h3>Pagar</h3>
                <ClientPayForm onSubmit={this.onSubmit} />
            </div>
            
        );
    }
}

ClientPay.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }


  const mapStateToProps = (state) =>{
    return { 
        currentClient: state.currentClient
     };
}


export default connect(mapStateToProps, {makePayment, reset}) (ClientPay);