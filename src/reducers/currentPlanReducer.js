import {UPDATE_CURRENT_PLAN} from '../actions/types';

const INITIAL_STATE = {
    nombre : null,
    monto : null,
    montoDescuento : null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case UPDATE_CURRENT_PLAN:
            return {...state,
                nombre: action.payload.nombre,
                monto: action.payload.monto,
                montoDescuento: action.payload.montoDescuento
                };
        default:
            return state;
    }

};