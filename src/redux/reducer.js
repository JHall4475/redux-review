const initState = {
    list: []
}

const reducer = (state=initState, actions) => {
    switch(actions.type){
        case "ADD_ITEM":
            return {...state, list: [...state.list, actions.payload]}
        case "DELETE_ITEM":
            return {...state, list: state.list.filter((item, index) => index !== actions.payload)}
        default: 
            return state
    }
}

export default reducer