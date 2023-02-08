const INITIAL_STATE = {
    loader: false,

}



export function loaderReducer(State = INITIAL_STATE, action) {

    switch (action.type) {
        case "SET_LOADER":
            return { ...State, loader: action.payload }


        default:
            return { ...State }



    }

}