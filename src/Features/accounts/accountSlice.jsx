import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload
    },
    withdraw(state, action) {
      state.balance -= action.payload
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose }
        }
      },
      reducer(state, action) {




        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        // state.balance = state.balance - action.payload.amount

      },

    },

    loan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";

    },

  },

});

export const { withdraw, requestLoan, loan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "INR") return { type: "account/deposit", payload: amount }
  console.log(amount, currency, "h")

  return async function (send) {
    // send({ type: "account/deposit", payload: deposit })

    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`)
    const data = await res.json()
    console.log(data)
    const converted = data.rates.INR
    send({ type: "account/deposit", payload: converted })

  }


}



export default accountSlice.reducer;

