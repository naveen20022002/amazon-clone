import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();//prevent the page from refreshing error
    signInWithEmailAndPassword(auth, email, password)
      .then((auth)=>{
        if(auth){
          navigate('/')
        }
      })
      .catch(err => alert(err.message))
  }
  const register = e =>{
    //here email is being stored instead of password and vice-versa..
    console.log(email)
    e.preventDefault();
          // console.log(auth);
         createUserWithEmailAndPassword(auth, password, email)
        .then((auth)=> {
          console.log(auth);
          if(auth){
            navigate('/')
          }
        })
        .catch(err => alert(err.message))
  }

  return (
    <div className='login'>
      <Link to = '/'>
      <img className='login-logo' src = 'amazon-logo1.png' alt = ''/>
      </Link>
      <div className='login-container'>
        <h2>Sign In</h2>
        <form>
          <h5>E-Mail</h5>
          <input onChange = {e => setEmail(e.target.value)} type='text'/>
          <h5>Password</h5>
          <input onChange = {e => setPassword(e.target.value)} type='password'/>
          <button onClick={signIn} type = 'submit' className='signin-button'>Sign In</button>
        </form>
        <p className='conditions'>
          By signing-in you agree to the AMAZON CLONE's terms & conditions of use & sale.
          Please see our Privscy Notice,our cookes notice and our interest based ads notice.
        </p>
        <button onClick={register} className='createaccountbutton'>Create New Account</button>

      </div>
    </div>
  )
}

export default Login
