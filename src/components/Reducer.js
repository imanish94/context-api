
function reducer(state,action){
    switch(action.type){
        case 'Add' : 
            return {...state, count : state.count + action.payload}
        case 'Minus' :
            return {...state, count : state.count - action.payload}
        case 'Reset' :
            return {...state,count : 0}
        default : 
            throw new Error()
    }
}

export default reducer;