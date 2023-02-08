import axios from 'axios'
import { changeLoader } from '../store/actions/loader'
import store from '../store/store'

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    params: {

        apiKey: "5a72e6ea7b5640b8a0422619db6c9d91"
    }


})


//request

axiosInstance.interceptors.request.use(function(config){

//     console.log(config);
// config.params.apikey="fdgfd654g565df4"
// config.headers={}

//show loader

store.dispatch(changeLoader(true))

return config
},function(error){

return Promise.reject(error)

})



axiosInstance.interceptors.response.use(function(response){

  //hide loader

    store.dispatch(changeLoader(false))
    return response
},function(error){


return Promise.reject(error)
})




export default axiosInstance