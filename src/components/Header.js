import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
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
                        <Link to="/" className="item">Listado cliente</Link>
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
                <Link to="/search" className="item">
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

export default Header;