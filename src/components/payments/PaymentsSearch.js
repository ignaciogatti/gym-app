import React from 'react';
import {connect} from 'react-redux';
import {fetchPayments} from '../../actions';
import PaymentForm from './PaymentForm';
import PropTypes from 'prop-types';


class PaymentsSearch extends React.Component {

    state ={
        paymentsToShow : []
    }

    componentDidMount(){
        this.props.fetchPayments();
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
            return (

                <div className="item" key={index}>
                    <div className="content">
                    <div className="header">
                            DNI: {payment.dni}
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
        payments : state.payments
     };
}


export default connect(mapStateToProps, {fetchPayments})(PaymentsSearch);