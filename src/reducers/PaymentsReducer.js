import _ from 'lodash';
import {
    FETCH_PAYMENTS
} from '../actions/types';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) =>{

    switch (action.type){
        case FETCH_PAYMENTS:
            return [...action.payload];
        default:
            return state;
    }
};
