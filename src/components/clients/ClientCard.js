import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentClient} from '../../actions';
import {Link} from 'react-router-dom';

class ClientCard extends React.Component {



    render(){
        const birthday = new Date(this.props.client.fechaNacimiento);
        const dd = String(birthday.getDate() + 1);
        const mm = String(birthday.getMonth() + 1 ); //January is 0!
        const yyyy = birthday.getFullYear();

        
        return (

            <div className="card" key={this.props.client.dni}>
                <div className="content">
                <i className="large middle aligned icon user" />
                    <div className="header">
                        {this.props.client.nombre + ' ' + this.props.client.apellido}
                    </div>
                    <div className="meta">
                        {'DNI: ' + this.props.client.dni}
                    </div>
                    <div className="meta">
                        {'Fecha de nacimiento: '+dd + '/' + mm + '/' + yyyy}
                    </div>
                    <div className="meta">
                        { 'Teléfono: ' + this.props.client.telefono}
                    </div>
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <Link to="/pay" className="ui basic green button" onClick={()=>this.props.updateCurrentClient(this.props.client)}>
                        Pagar
                    </Link>
                    <Link to="/edit" className="ui basic red button" onClick={()=>this.props.updateCurrentClient(this.props.client)}>
                        Ver detalle
                    </Link>
                </div>
                </div>
            </div>
        );
    }

}


export default connect(null, { updateCurrentClient})( ClientCard);