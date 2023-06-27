import { combineReducers, createStore } from "redux";

// Account Reducer 

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
}

const initialStateCustomer = {
    fullname: "",
    nationalId: "",
    createdAt: "",
}

function AccountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "Account/deposit":
            return {
                ...state, balance: state.balance + action.payload

            };
        case "Account/withdraw":
            return {
                ...state, balance: state.balance - action.payload

            };
        case "Account/loanPurpose": if (state.loan > 0) return state.balance
            return {
                ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose

            };
        case "Account/payLoan":
            return {
                ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan,

            };

        default:
            return state;
    }
}




function deposit(amount) {
    return { type: "Account/deposit", payload: amount }

}



function withdraw(amount) {
    return { type: "Account/withdraw", payload: amount }


}

function requestLoan(amount, purpose) {
    return { type: "Account/loanPurpose", payload: { amount, purpose } }

}

function loan(amount) {
    return { type: "Account/payLoan", payload: amount }


}



// Account Reducer 

// Customer Reducer


function CustomerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullname: action.payload.fullname,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt,

            };
        case "customer/updateName":
            return {
                ...state,
                fullname: action.payload,

            }

        default:
            return state
    }

}



// Customer Reducer 

function createCustomer(fullname, nationalId) {
    return { type: "customer/createCustomer", payload: { fullname, nationalId, createdAt: new Date().toISOString() } }


}

function updateName(fullname) {
    return {
        type: "customer/updateName", payload: fullname,
    }
}




// Global reducers

const rootReducer = combineReducers({
    account: AccountReducer,
    customer: CustomerReducer,
})
// Global reducers
const store = createStore(rootReducer)

store.dispatch(deposit(500))

store.dispatch(withdraw(100))

console.log(store.getState())
store.dispatch(requestLoan(2000, "Buy a car"))
console.log(store.getState())
store.dispatch(loan(1000))
console.log(store.getState())



// account 
store.dispatch(createCustomer("Prakash", 88877))
console.log(store.getState())
store.dispatch(updateName("John"))

console.log(store.getState())
store.dispatch(deposit(500))
console.log(store.getState())
