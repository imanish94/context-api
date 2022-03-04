import React, { useCallback } from 'react'
import  Ccompoent  from './Ccompoent';
import Context from './Context';

 class Bcompoent extends React.Component{
    static contextType = Context;
    render(){
        console.log("Bcompoent",this.context);
        return(
        <>
        <h1>Bcompoent</h1>
        <Ccompoent/>
        </>
    )
}
}

export default Bcompoent