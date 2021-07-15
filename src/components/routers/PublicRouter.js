import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "./googleAuth";

const PublicRouter = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();

    return (
        <div>
            <Route {...rest} render={props => (
                !isSignedIn ?
                <Component {...props} /> : 
                <Redirect exact to="/private" />
            )} />    
        </div>
    );
};

export default PublicRouter;