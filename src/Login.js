import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    // uses firebase google for sign in
    const signIn = () => {
       auth.signInWithPopup(provider)
            .catch((error) => alert(error.message));

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.proofhub.com/wp-content/uploads/2021/03/Discord-logo-1.png" 
                
                alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>

            
        </div>
    )
}

export default Login
