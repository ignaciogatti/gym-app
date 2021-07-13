import {combineReducers} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import clientsReducer from './clientsReducer';
import authReducer from './authReducer';
import currentClientReducer from './currentClientReducer';
import clientPaymentsReducer from './clientPaymentsReducer';
import plansReducer from './plansReducer';
import currentPlanReducer from './currentPlanReducer';

export default combineReducers({
  auth : authReducer,
  form : reduxFormReducer,
  clients : clientsReducer,
  currentClient : currentClientReducer,
  clientPayments : clientPaymentsReducer,
  plans: plansReducer,
  currentPlan : currentPlanReducer
});
