import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Gym App
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Listado cliente
                </Link>
            </div>
            <div className="right menu">
                <Link to="/news" className="item">
                    Agregar cliente
                </Link>
            </div>
            <div className="right menu">
                <Link to="/search" className="item">
                    Buscar cliente
                </Link>
            </div>
        </div>
    );
}

export default Header;