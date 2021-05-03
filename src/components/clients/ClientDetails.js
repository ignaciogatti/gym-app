import React from 'react';
import ClientEdit from './ClientEdit';
import {connect} from 'react-redux';
import {fetchClientPayments, deleteClient} from '../../actions';



class ClientDetails extends React.Component {

    componentDidMount(){
        this.props.fetchClientPayments(this.props.currentClient);
    }

    renderList(){
        return this.props.clientPayments.map( (payment, index) =>{
            return (

                <div className="item" key={index}>
                    <div className="content">
                        <div className="header">
                            {payment.mes}
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
        return (
            <div>
                 <ClientEdit />
                <h3>Pagos realizados</h3>
                <div className="ui celled list" >{this.renderList()}</div>
                <div>
                <button 
                    onClick={()=>this.props.deleteClient(this.props.currentClient)} 
                    className="ui button negative"
                >
                    Borrar Cliente
                </button>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        clients : state.clients,
        currentClient: state.currentClient,
        clientPayments : state.clientPayments 
     };
}


export default connect(mapStateToProps, {fetchClientPayments, deleteClient})(ClientDetails);