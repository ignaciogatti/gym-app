import _ from 'lodash';
import {
    FETCH_CLIENTS,
    CREATE_CLIENT,
    EDIT_CLIENT,
    DELETE_CLIENT
} from '../actions/types';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) =>{

    switch (action.type){
        case FETCH_CLIENTS:
            return [...action.payload];
        case CREATE_CLIENT:
            return [...state];
        case EDIT_CLIENT:
            return [...state];
        case DELETE_CLIENT:
            return [...state];
        default:
            return state;
    }
};