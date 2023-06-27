
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
}



export default function AccountReducer(state = initialStateAccount, action) {
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



export function deposit(amount,currency) {
  if (currency === "INR") return { type: "Account/deposit", payload: amount }

  


  return async function (send, getState) {



    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`);

    const data = await res.json()
    console.log(data)
    const converted =  data.rates.INR

    send({ type: "Account/deposit", payload:converted})   
    
  }

}



export function withdraw(amount) {
  return { type: "Account/withdraw", payload: amount }


}

export function requestLoan(amount, purpose) {
  return { type: "Account/loanPurpose", payload: { amount, purpose } }

}

export function loan(amount) {
  return { type: "Account/payLoan", payload: amount }


}

