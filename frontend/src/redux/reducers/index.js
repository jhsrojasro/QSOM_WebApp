
import { combineReducers } from 'redux';
import {userReducer} from './user';

const rootReducer = combineReducers({
    user: userReducer,
    //payment: paymentGroupReducer,
    //payment_method: paymentMethodGroupReducer,
});


export * from './user';
//export * from './payment';
//export * from './payment_method'
export default rootReducer;