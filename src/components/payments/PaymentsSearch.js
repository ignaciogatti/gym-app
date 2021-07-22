import React from 'react';
import {connect} from 'react-redux';
import {fetchPayments, fetchClients, updateCurrentClient} from '../../actions';
import PaymentForm from './PaymentForm';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class PaymentsSearch extends React.Component {

    state ={
        paymentsToShow : []
    }

    componentDidMount(){
        this.props.fetchPayments();
        this.props.fetchClients();
    }


    onSubmit = (values)=>{

        const {fechaInicio, fechaFin} = values;

        const paymentDayStart = new Date(fechaInicio);
        paymentDayStart.setHours(0, 0, 0, 0);

        const paymentDayEnd = new Date(fechaFin);
        paymentDayStart.setHours(0, 0, 0, 0);

        const paymentsSelected = this.findPaymentsMonth(paymentDayStart, paymentDayEnd);

        this.setState({paymentsToShow : paymentsSelected});
    }

    findClient(dni){

        return this.props.clients.filter( client =>{
            return (client.dni === dni);
        }

        )
    }


    findPaymentsMonth(paymentDayStart, paymentDayEnd){

        return this.props.payments.filter(payment => {
            const paymentDay = new Date(payment.createdAt);

            paymentDay.setHours(0, 0, 0, 0);

            return ((paymentDayStart <= paymentDay)&&(paymentDay <= paymentDayEnd) )
          });
    }

    renderList(){
        return this.state.paymentsToShow.map( (payment, index) =>{

            const paymentDay = new Date(payment.createdAt);
            const dd = String(paymentDay.getDate() + 1);
            const mm = String(paymentDay.getMonth() + 1 ); //January is 0!
            const yyyy = paymentDay.getFullYear();

            const client = this.findClient(payment.dni)[0];


            return (

                <div className="item" key={index}>
                    <div className="content">
                    <div className="header">
                        <Link to="/edit" onClick={()=>this.props.updateCurrentClient(client)}>
                          {client.nombre + ' ' + client.apellido}
                        </Link>
                        </div>
                        <div className="header">
                            {payment.mes}
                        </div>
                        <div className="meta">
                           Fecha de pago: {dd + '/' + mm + '/' + yyyy}
                        </div>
                        <div className="meta">
                           $ {payment.monto}
                        </div>
                    </div>
                </div>
            );
        })
    }


    render(){

        let total = 0;

        if (this.state.paymentsToShow.length > 0){
            total = this.state.paymentsToShow.map(payment => payment.monto).reduce((prev, next) => prev + next);
        }

        
        return (
            <div>
                <h3>Cobros</h3>
                <PaymentForm onSubmit={this.onSubmit} />
                <h3>Resultado</h3>
                <div className="ui celled list" >{this.renderList()}</div>
                <h3>{'Total: ' + total}</h3>

            </div>
            
        );
    }
}

PaymentsSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }


const mapStateToProps = (state) =>{
    return { 
        payments : state.payments,
        clients : state.clients
    }
}


export default connect(mapStateToProps, {fetchPayments, fetchClients, updateCurrentClient})(PaymentsSearch);