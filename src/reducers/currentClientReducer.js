import {UPDATE_CURRENT_CLIENT} from '../actions/types';

const INITIAL_STATE = {
    nombre : null,
    apellido : null,
    fechaNacimiento : null,
    dni: null,
    telefono : null,
    fechaPagoTemprana: null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case UPDATE_CURRENT_CLIENT:
            return {...state,
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                fechaNacimiento: action.payload.fechaNacimiento,
                dni: action.payload.dni,
                telefono: action.payload.telefono,
                fechaPagoTemprana: action.payload.fechaPagoTemprana
                };
        default:
            return state;
    }

};