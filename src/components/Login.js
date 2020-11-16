import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
    }

    const register = e =>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <Link to="/">        
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>        
            </Link>
            <div className="login__container">
                <h1>Login</h1>
                <form className="login__form">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button type="submit" className='login__signInButton' onClick={signIn}>Sign in</button>

                    <p>
                        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                    </p>
                </form>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
