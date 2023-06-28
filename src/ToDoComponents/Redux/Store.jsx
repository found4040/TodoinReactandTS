import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "../../Features/accounts/accountSlice";
import CustomerReducer from "../../Features/customer/customerSlice";


 const store =   configureStore({
    reducer:{
        account: AccountReducer,
        customer: CustomerReducer,
    }
})


 export default store;










