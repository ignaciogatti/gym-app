import React from 'react';
import ClientSearchBar from './ClientSearchBar'
import {connect} from 'react-redux';
import {fetchClients} from '../../actions';

class ClientShow extends React.Component {

    componentDidMount(){
        this.props.fetchClients();
        console.log(this.props.clients);
    }


    onTermSubmit = async term =>{
        console.log(term);
    };

    render(){
        return (
            <div>
                 <ClientSearchBar onFormSubmit={this.onTermSubmit} />
                <h3>Mostrar Cliente</h3>
            </div>
            
        );
    }
}

const mapStateToProps = (state) =>{
    return { 
        clients : state.clients
     };
}


export default connect(mapStateToProps, {fetchClients})(ClientShow);