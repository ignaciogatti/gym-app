import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component{
    
    render(){

        if(!this.props.isSigned.isSignedIn){
            return null
        }else{
            return(
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">
                        Gym App
                    </Link>
                    <div className="ui simple dropdown item">
                        Clientes
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">
                                <Link to="/clientlist" className="item">Listado cliente</Link>
                            </div>
                            <div className="item">
                                <Link to="/news" className="item">Agregar cliente</Link>
                            </div>
                            <div className="item">
                                <Link to="/search" className="item">Buscar cliente</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ui simple dropdown item">
                        Planes
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">
                            <Link to="/planlist" className="item">Ver planes</Link>
                            </div>
                            <div className="item">
                                <Link to="/plannews" className="item">Agregar plan</Link>
                            </div>

                        </div>

                    </div>

                    <div className="right menu">
                        <Link to="/birthday" className="item">
                            Cumpleaños del día
                        </Link>
                    </div>
                    <div className="right menu">
                        <Link to="/payments" className="item">
                            Cobros del día
                        </Link>
                    </div>
                    <div className="right menu">
                        <Link to="/search" className="item">
                            Deudores
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) =>{
    return { isSigned: state.auth };
}

export default connect(mapStateToProps, null)(Header);