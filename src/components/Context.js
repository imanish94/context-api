import React from "react"

const initialValue = {
    count : 0,
    name : "Initial Value"
}

const Context = React.createContext(initialValue);

const Provider = Context.Provider;
const Consumer = Context.Consumer;

export { Provider, Consumer }

export default Context