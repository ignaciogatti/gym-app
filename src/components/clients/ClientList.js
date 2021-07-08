import React from 'react';
import {connect} from 'react-redux';
import {fetchClients, updateCurrentClient} from '../../actions';
import ClientCard from './ClientCard';

class ClientList extends React.Component {

    componentDidMount(){
        this.props.fetchClients();
    }


    renderList(){
        return this.props.clients.map( client =>{
            
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