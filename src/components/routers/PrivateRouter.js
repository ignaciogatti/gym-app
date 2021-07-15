import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isSigned, ...rest}) => {

    const { isSignedIn } = isSigned;

    return (
        <div>
            <Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} />: 
                <Redirect to="/" />
            )} />
        </div>
    );
};

const mapStateToProps = (state) =>{
    return { isSigned: state.auth };
}

export default connect(mapStateToProps, null)(PrivateRoute);