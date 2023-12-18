import React, { useState } from 'react';
import './css/Login.css'
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

    
            signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history('/');
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

      
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // userCredential contains all the information about the user
                // and the authentication process
                const user = userCredential.user;
                // You can now use the user object
                console.log(user);
                history('/');
            })
            .catch((error) => {
                // Handle errors here
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });

    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login_logo">
                    <StorefrontIcon className="login_logoImage" fontSize="large" />
                    <h2 className="login_logoTitle">MagicShop</h2>
                </div>
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to MagicShop's Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registerButton' onClick={register}>Create your MagicShop Account</button>
            </div>
        </div>
    )
}

export default Login;