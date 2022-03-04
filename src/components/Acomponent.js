import React from 'react'
import  Bcompoent  from './Bcomponent';
import ErrorBoundary from './Error';

 const Acompoent = (props) => {
    console.log("Acompoent",props)
    return(
        <ErrorBoundary>
        <h1>Acompoent</h1>
        <Bcompoent/>
        <></>
        </ErrorBoundary>
    )
}

export default Acompoent