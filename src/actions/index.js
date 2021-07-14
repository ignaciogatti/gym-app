import gymDB from '../apis/gymDB';
import history from '../history';
import {SIGN_IN, 
    SIGN_OUT, 
    CREATE_CLIENT,
    FETCH_CLIENTS,
    DELETE_CLIENT,
    EDIT_CLIENT,
    UPDATE_CURRENT_CLIENT,
    FETCH_CLIENT_PAYMENTS,
    FETCH_PLANS,
    CREATE_PLAN,
    UPDATE_CURRENT_PLAN,
    EDIT_PLAN,
    DELETE_PLAN} from './types';


export const signIn = userLogged =>{

    return {
        type: SIGN_IN,
        payload: userLogged
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


export const editClient = (filter, values) => async dispatch => {
    const query={
        'filter':filter,
        'update': values
    }
    const response = await gymDB.post('/updateClient/', query);

    dispatch({type: EDIT_CLIENT, payload:response.client});
    history.push('/');
}

export const deleteClient = values => async dispatch => {

    const filter  = {
        'filter':{
            'dni': values.dni
        }
    }

    console.log(filter);
    await gymDB.delete('/deleteClient/', { data: filter});

    dispatch({type: DELETE_CLIENT, payload: values.dni});
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

export const fetchClientPayments = (currrentClient) => async dispatch =>{

    const response = await gymDB.get(`/getClientPayments/${currrentClient.dni}`);

    dispatch({type: FETCH_CLIENT_PAYMENTS, payload: response.data.clientPayments});
}

export const fetchPlans = () => async dispatch =>{
    
    const response = await gymDB.get('/getPlans');
    
    dispatch({type: FETCH_PLANS, payload: response.data.clients});
}

export const createPlan = values => async (dispatch) => {

    const response = await gymDB.post('/putPlan', {...values });
    
    dispatch({type: CREATE_PLAN, payload: response.plan});
    history.push('/');
};

export const updateCurrentPlan = currrentPlan =>{
    return {
        type: UPDATE_CURRENT_PLAN,
        payload: currrentPlan
    };
};


export const editPlan = (filter, values) => async dispatch => {
    const query={
        'filter':filter,
        'update': values
    }
    const response = await gymDB.post('/updatePlan/', query);

    dispatch({type: EDIT_PLAN, payload:response.client});
    history.push('/');
}


export const deletePlan = values => async dispatch => {

    const filter  = {
        'filter':{
            'nombre': values.nombre
        }
    }

    console.log(filter);
    await gymDB.delete('/deletePlan/', { data: filter});

    dispatch({type: DELETE_PLAN, payload: values.nombre});
    history.push('/');
}