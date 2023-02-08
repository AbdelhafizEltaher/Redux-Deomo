import React,{useContext} from 'react';
import { authContext } from './../../contexts/auth';
import {Navigate} from 'react-router-dom'
const ContactUs = () => {
         const {isAuth}= useContext(authContext)
         if(isAuth==false) {

          return <Navigate to="/"/>

         }
    return (
        <div>
            Contact Us Page
        </div>
    );
}

export default ContactUs;
