import React, { useState } from 'react'
import chef from './assets/gourmet.gif'
import './Login.css'
import { Link } from 'react-router-dom'
import GeneralInput from './GeneralInput'
import { auth } from './FireBaseConfig/FireBase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export const Login =()=> {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const loginHandler=async()=>{
        try {
            await createUserWithEmailAndPassword(auth,email,password)
        }
        catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='Login-page'>
        <div className='top-side'>
        <div className='login-img'>
            <img src={chef} className='chefs' style={{height:'162px'}} />
        </div>
    <div className='Links'>
        <Link className='login-Link' to='./#'>Login</Link>
        <Link className='sign-Link' to='./SignUp'>Sign-up</Link>
    </div>
    </div>
    
    <div className='down-section'>
        <div className='fields'>
        <div className='email-field'>
        <GeneralInput 
        label='Email address'
        placeholder='Enter your email'
        id='email'
        onChange={handleEmailChange}
        type='email'
        value={email}
        />
        </div>
        
        <div className='password-field'>
        <GeneralInput
        label='Password'
        placeholder='Enter your password'
        id='password'
        onChange={handlePasswordChange}
        type='password'
        value={password}
        />
        </div>
        
        <button onClick={loginHandler}>Login</button>
       <Link className='forgot' to='./ForgottenPassword'> Forgot passcode? </Link>
       </div>
    </div>
    </div>
  )
}

export default Login