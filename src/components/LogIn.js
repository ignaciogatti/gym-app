import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{

    componentDidUpdate(prevProps){

        if (prevProps.userSigned.isSignedIn !== this.props.userSigned.isSignedIn){
            console.log(this.props.userSigned);
        }

    }


    responseGoogle(response){
        const userLogged = {
            userId : response.profileObj.googleId,
            userMail : response.profileObj.email,
            userName : response.profileObj.name
        };
        this.props.signIn(userLogged);
    }

    render(){

        console.log(this.props.userSigned);

        if (this.props.userSigned.isSignedIn){

            return (

                <div>
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={(response)=> this.responseGoogle(response)}
                    >
                 </GoogleLogout>
            </div>

            )
        } else{

            return(

                <div>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        onSuccess={(response)=> this.responseGoogle(response)}
                        onFailure={(response)=> this.responseGoogle(response)}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            )
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


