const initialStateCustomer = {
  fullname: "",
  nationalId: "",
  createdAt: "",
}








// Account Reducer 

// Customer Reducer

 
export default function CustomerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullname, nationalId) {
  return { type: "customer/createCustomer", payload: { fullname, nationalId, createdAt: new Date().toISOString() } }


}

export function updateName(fullname) {
  return {
    type: "customer/updateName", payload: fullname,
  }
}