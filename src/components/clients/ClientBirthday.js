import React from 'react';
import {connect} from 'react-redux';
import {fetchClients, updateCurrentClient} from '../../actions';
import ClientCard from './ClientCard';



class ClientBirthday extends React.Component{
    
    componentDidMount(){
        this.props.fetchClients();
    }

    findBirthdayClients(){
        const currentDay = new Date();
        return this.props.clients.filter(client => {
            const birthday = new Date(client.fechaNacimiento);
            
            const dd = birthday.getDate() + 1;
            const mm = birthday.getMonth() ; //January is 0!

            return ((dd === currentDay.getDate())&&(mm === currentDay.getMonth()))
          });
    }

    renderList(){

        const birthdayClients = this.findBirthdayClients();
        return birthdayClients.map( client =>{
            
            return (
                <ClientCard client={client} />
            );
        })
    }
    
    render(){
        const currentDay = new Date();

        return (
            <div>
                <h3>Cumpleaños del día {currentDay.toLocaleDateString() + ''}</h3>
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


export default connect(mapStateToProps, {fetchClients, updateCurrentClient})(ClientBirthday);