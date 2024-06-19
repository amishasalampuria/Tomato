import { assets } from '../../assets/frontend_assets/assets';

import './LoginPopUp.css';
import {useState} from 'react'

function LoginPopUp({setShowLogin}){

    const [currState, setCurrState] = useState("Sign up")
    return (
        <div className='login-popup'>
            <form  className='login-popup-container'>
                <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
                </div>
                <div className='login-popup-inputs'>
                    {currState==='Login'?<></>:<input type='text'  placeholder='Your Name' required/>}
                    <input type='email'  placeholder='Your Mail' required/>
                    <input type='password'  placeholder='Your Password' required/>
                </div>
                <button>{currState==='Sign up'?"Create Account":"Login"}</button>
                <div  className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>By clicking, I agree to terms of use and privacy policy.</p>
                </div>
                {currState==='Login'
                ?<p>Creat account? <span onClick={()=>{setCurrState('Sign up')}}> Click here</span></p>
                :<p>Already have an account? <span onClick={()=>{setCurrState('Login')}}>Login here</span></p>
                }
                
                
            </form>
        </div>
    )
}

export default LoginPopUp;