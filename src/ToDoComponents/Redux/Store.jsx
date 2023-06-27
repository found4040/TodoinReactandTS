import { applyMiddleware, combineReducers, createStore } from "redux";
import AccountReducer from "../../Features/accounts/accountSlice";
import CustomerReducer from "../../Features/customer/customerSlice";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    account: AccountReducer,
    customer: CustomerReducer,
})


 const store = createStore(rootReducer,applyMiddleware(thunk));

 export default store;










