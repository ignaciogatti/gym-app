import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{


    responseSignInGoogle(response){
        const userLogged = {
            userId : response.profileObj.googleId,
            userMail : response.profileObj.email,
            userName : response.profileObj.name
        };
        this.props.signIn(userLogged);
    }

    responseSignOutGoogle(){
        this.props.signOut();
    }

    renderLogIn(){
        return (

            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">Registrarse con su cuenta</div>
                    </h2>
                    <div className="ui large form">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Log in with Google"
                            onSuccess={(response)=> this.responseSignInGoogle(response)}
                            onFailure={(response)=> this.responseSignInGoogle(response)}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    
                </div>
                
            </div>
        );
    }

    renderLogOut(){

        console.log(this.props.userSigned);
        return (

            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">Bienvenido {this.props.userSigned.userName}</div>
                    </h2>
                    <div className="ui large form">
                        <GoogleLogout
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={(response)=> this.responseSignOutGoogle()}
                         >
                    </GoogleLogout>
                    </div>
                    
                </div>
                
            </div>
        );
    }

    render(){


        if (this.props.userSigned.isSignedIn){

            return this.renderLogOut();
        } else{
            return this.renderLogIn();
        }
    }
}

const mapStateToProps = (state) =>{
    return { userSigned: state.auth };
}

export default connect(
        mapStateToProps,
        {signIn,
        signOut}
    )(GoogleAuth);


