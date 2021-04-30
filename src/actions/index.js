import gymDB from '../apis/gymDB';
import history from '../history';
import {SIGN_IN, 
    SIGN_OUT, 
    CREATE_CLIENT,
    FETCH_CLIENTS,
    FETCH_CLIENT,
    DELETE_CLIENT,
    EDIT_CLIENT,
    UPDATE_CURRENT_CLIENT,
    FETCH_CLIENT_PAYMENTS} from './types';


export const signIn = userId =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};

export const createClient = values => async (dispatch) => {

    const response = await gymDB.post('/putClient', {...values });
    
    dispatch({type: CREATE_CLIENT, payload: response.client});
    history.push('/');
};

export const fetchClients = () => async dispatch =>{
    const response = await gymDB.get('/getClients');
    
    dispatch({type: FETCH_CLIENTS, payload: response.data.clients});
}

export const fetchClient = (dni) => async dispatch =>{
    const response = await gymDB.get(`/getClient/${dni}`);

    dispatch({type: FETCH_CLIENT, payload: response.client});
}

export const editClient = (filter, values) => async dispatch => {
    const query={
        'filter':filter,
        'update': values
    }
    const response = await gymDB.post('/updateClient/', query);

    dispatch({type: EDIT_CLIENT, payload:response.client});
    history.push('/');
}

export const deleteStream = (dni) => async dispatch => {
    await gymDB.delete(`/deleteClient/${dni}`)

    dispatch({type: DELETE_CLIENT, payload: dni})
    history.push('/');
}

export const updateCurrentClient = currrentClient =>{
    return {
        type: UPDATE_CURRENT_CLIENT,
        payload: currrentClient
    };
};

export const makePayment = values => async (dispatch) => {

    const response = await gymDB.post('/putPayment', {...values });
    
    dispatch({type: CREATE_CLIENT, payload: response.client});
    history.push('/');
};

export const fetchClientPayments = (nombre, apellido, dni) => async dispatch =>{
    const response = await gymDB.get(`/getClient/${dni}`);

    dispatch({type: FETCH_CLIENT_PAYMENTS, payload: response.clientPeyments});
}