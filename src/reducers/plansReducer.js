import _ from 'lodash';
import {
    FETCH_PLANS,
    EDIT_PLAN,
    DELETE_PLAN,
    CREATE_PLAN
} from '../actions/types';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) =>{

    switch (action.type){
        case FETCH_PLANS:
            return [...action.payload];
        case CREATE_PLAN:
            return [...state];
        case EDIT_PLAN:
            return [...state];
        case DELETE_PLAN:
            return [...state];
        default:
            return state;
    }
};