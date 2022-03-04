import React,{useContext, useReducer} from 'react'
import Context from './Context';
import reducer from "./Reducer"
import  Acompoent  from './Acomponent';
import { Provider } from './Context';


export const UseStateHook = (props) => {
    const value = useContext(Context);
    const [state, dispatch] = useReducer(reducer,value);
    console.log("UseStateHooks",props)
    return(
        <>
        <h1>Hooks</h1>
        <Provider value={state}>
        <Acompoent/>
        </Provider>
        {state.count}
        <button onClick={() => dispatch({type: 'Add', payload : 2})}>Add+</button>
        <button onClick={() => dispatch({type: 'Minus', payload : 2})}>Minus-</button>
        <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
        </>
    )
}