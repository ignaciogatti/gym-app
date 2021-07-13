import React from 'react';
import {connect} from 'react-redux';
import {fetchClients, updateCurrentClient} from '../../actions';
import ClientCard from './ClientCard';

class ClientList extends React.Component {

    componentDidMount(){
        this.props.fetchClients();
    }

    compare( a, b ) {

        const a_full_name = a.nombre + ' ' + a.apellido;
        const b_full_name = b.nombre + ' ' + b.apellido;

        if ( a_full_name < b_full_name ){
          return -1;
        }
        if ( a_full_name > b_full_name ){
          return 1;
        }
        return 0;
      }
      


    renderList(){
        const sorted_clients = this.props.clients.sort(this.compare);
        return sorted_clients.map( client =>{
            
            return (
                <ClientCard client={client} /> 
            );
        })
    }


    render(){
        return (
            <div>
                <h3>Clientes</h3>
                <div className="ui cards" >{this.renderList()}</div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        clients : state.clients,
        currentClient: state.currentClient
     };
}


export default connect(mapStateToProps, {fetchClients, updateCurrentClient})( ClientList);