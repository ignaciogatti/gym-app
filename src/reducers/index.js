import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import clientsReducer from './clientsReducer';
import authReducer from './authReducer';
import currentClientReducer from './currentClientReducer';
import clientPaymentsReducer from './clientPaymentsReducer';

export default combineReducers({
  auth : authReducer,
  form : reduxFormReducer,
  clients : clientsReducer,
  currentClient : currentClientReducer,
  clientPayments : clientPaymentsReducer
});
