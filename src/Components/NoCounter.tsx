import React, { useReducer} from 'react'

type State = {
    value: number;
  }
  
  const initialCounterState: State = {
    value: 0
  }

  enum ActionKind {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
  }
  
  type Action = {
    type: ActionKind,
    payload: number
  }
  
  const increaseAction: Action = {
    type: ActionKind.Increase,
    payload: 3
  }
  
  const decreaseAction: Action = {
    type: ActionKind.Decrease,
    payload: 1
  }



  function counterReducer(state: State, action: Action): State {
    const {type} = action;
    
   
    switch (type) {
       
      
      case ActionKind.Increase:
        return {
          ...state, 
          value: state.value + action.payload
        }
      
    
      case ActionKind.Decrease:
        return {
          ...state, 
          value: state.value - action.payload
        }
        
     
      default:
        return state;
    }
  }

const NoCounter:React.FC = () => {  




    const [state, dispatch] = useReducer(counterReducer, initialCounterState)




  return (
    <div className='mt-4'>
        <h1 className='text-center'>No Counter</h1>
        <div className='d-flex justify-content-between'>
            <button className='btn btn-primary'onClick={() => dispatch(increaseAction)}>Increase</button>
            <span>{state.value}</span>
            <button className='btn btn-info ms-2' onClick={() => dispatch(decreaseAction)}>decrease</button>
        </div>
    </div>
  )
}

export default NoCounter