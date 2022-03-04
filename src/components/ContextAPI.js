import React from 'react'

const initialValue = {
    count : 0
  }
  
  const Context = React.createContext(initialValue);
  
  function reducer(state,action){
      switch(action.type){
          case "ADD_VALUE" : 
          return { ...state, count : state.count + action.payload }
          case "REMOVE_VALUE" : 
          return { ...state, count : state.count - action.payload }
          case "RESET_VALUE" : 
          return { count : 0 }
          default :
          return state
      }
  
  }

 const ContextAPI = (props) => {
     const [newVlaue, setNewValue] = React.useState(false)
    const ContextValue = React.useContext(Context)
    const [state, dispatch] = React.useReducer(reducer,ContextValue);
    
    const addValue = () => {
        console.log("value add...",newVlaue)
    }

    return(
        <>
        {state.count}
        <h2>Context API</h2>
        <button onClick={() => dispatch({ type:"ADD_VALUE", payload:2 })}>Add Value</button>
        <button onClick={() => dispatch({ type:"REMOVE_VALUE", payload:2 })}>Remove Value</button>
        <button onClick={() => dispatch({ type:"RESET_VALUE"})}>Reset Value</button>
       
        </>
    )
}

export default ContextAPI