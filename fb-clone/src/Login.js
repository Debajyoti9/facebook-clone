import React from 'react'
import './Login.css';
import { auth, provider} from "./firebase";
import { actionTypes} from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [state,dispatch] = useStateValue();
   const signIn = () =>{
       auth.signInWithPopup(provider)
       .then(result => {
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user,
           });
           console.log(result.user);
       }).catch((error) => alert(error.message));
   }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.pinimg.com/originals/fb/4c/fc/fb4cfc050d8ea70455dfe540b8f2b9a9.png" alt=""/>

                <img src="https://e3.365dm.com/19/11/1600x900/skynews-facebook-logo_4826956.jpg?20191105091857" alt=""/>
            </div>
            <button type="submit" onClick = {signIn}>
                SignIn
            </button>
        </div>
    )
}

export default Login 
