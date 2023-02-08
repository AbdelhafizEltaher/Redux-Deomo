
import axiosInstance from './../../axiosConfig/axios';


export function changeArticles() {



    return (dispatch) => {

        axiosInstance.get("/everything", { params: { q: "react" } }).then((res) => {

            console.log(res);

            dispatch({ type: "SET_ARTICLES", payload: res.data.articles })


        }).catch((err) => {
            console.log(err);

        })

    }
}