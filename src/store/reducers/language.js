const INITIAL_STATE = {

    lang: "en",
    Name:"Ahmed",
    Age:25,
    Employee:'teter'
  
}



export  function languageReducer(State = INITIAL_STATE, action) {

    switch (action.type) {
        case "SET_LANGUAGE":
            return { ...State, lang: action.payload }

        default:
            return { ...State }



    }

}