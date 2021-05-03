import React from 'react';
import ClientSearchBar from './ClientSearchBar'
import {connect} from 'react-redux';
import { reset } from 'redux-form'     // reset action creator exported by redux-form
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {fetchClients, updateCurrentClient} from '../../actions';

class ClientShow extends React.Component {

    state = {searchedClient:[]}

    componentDidMount(){
        this.props.fetchClients();
    }


    onSubmit = (values)=>{
        values.nombre = values.nombre.toLowerCase();
        values.apellido = values.apellido.toLowerCase();
        const result = this.props.clients.filter(client => {return ((client.nombre ===  values.nombre)&& (client.apellido ===  values.apellido))});
        this.setState({searchedClient:result});
    }

    renderList(){
        return this.state.searchedClient.map( client =>{
            return (

                <div className="card" key={client.dni}>
                    <div className="content">
                    <i className="large middle aligned icon user" />
                        <div className="header">
                            {client.nombre + ' ' + client.apellido}
                        </div>
                        <div className="meta">
                            {client.dni}
                        </div>
                    </div>
                    <div className="extra content">
                    <div className="ui two buttons">
                        <Link to="/pay" className="ui basic green button" onClick={()=>this.props.updateCurrentClient(client)}>
                            Pagar
                        </Link>
                        <Link to="/edit" className="ui basic red button" onClick={()=>this.props.updateCurrentClient(client)}>
                            Ver detalle
                        </Link>
                    </div>
                    </div>
                </div>
            );
        })
    }


    render(){

        return (
            <div>
                 <ClientSearchBar onSubmit={this.onSubmit} />
                <h3>Cliente buscado</h3>
                <div className="ui cards" >{this.renderList()}</div>
            </div>
            
        );
    }
}



ClientShow.propTypes = {
    onSubmit: PropTypes.func.isRequired,  // shows a dialog box
    reset: PropTypes.func.isRequired      // reset action bound to dispatch
  }

const mapStateToProps = (state) =>{
    return { 
        clients : state.clients
     };
}


export default connect(mapStateToProps, {fetchClients, updateCurrentClient, reset})(ClientShow);