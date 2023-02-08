import { type } from "@testing-library/user-event/dist/type"

export function changeLanguage(data) {


    return {
        type: "SET_LANGUAGE",
        payload: data

    }
}



