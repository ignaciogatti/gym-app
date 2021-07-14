import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn : false,
    userId: null,
    userName: null,
    userMail: null
};

export default (state={INITIAL_STATE}, action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state, 
                isSignedIn: true, 
                userId: action.payload.userId,
                userName: action.payload.userName,
                userMail: action.payload.userMail
            };
        case SIGN_OUT:
            return {...state, 
                isSignedIn: false, 
                userId:null,
                userName: null,
                userMail: null
            };
        default:
            return state;
    }

};