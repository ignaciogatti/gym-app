import React from 'react';
import {connect} from 'react-redux';
import {fetchClients, updateCurrentClient} from '../../actions';
import {Link} from 'react-router-dom';



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
            
            const birthday = new Date(client.fechaNacimiento);
            const dd = String(birthday.getDate() + 1);
            const mm = String(birthday.getMonth() + 1 ); //January is 0!
            const yyyy = birthday.getFullYear();

            
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
                        <div className="meta">
                            {dd + '/' + mm + '/' + yyyy}
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