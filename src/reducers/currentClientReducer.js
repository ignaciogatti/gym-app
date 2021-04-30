import {UPDATE_CURRENT_CLIENT} from '../actions/types';

const INITIAL_STATE = {
    nombre : null,
    apellido : null,
    dni: null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case UPDATE_CURRENT_CLIENT:
            return {...state,
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                dni: action.payload.dni
                };
        default:
            return state;
    }

};