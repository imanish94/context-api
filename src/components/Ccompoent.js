import React from 'react'
import Context from './Context'

const Ccompoent = (props) => {
    
    const value = React.useContext(Context);
    console.log("Ccompoent",props)
    return(
        <>
        <h1>Ccompoent</h1>
        <p>{value.count}</p>
        </>
    )
}

export default Ccompoent