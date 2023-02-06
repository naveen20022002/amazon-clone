import React, {useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {
  BrowserRouter as Router,
  Routes,//Switch is replaced by Routes and the syntax is also changed
  Route
} from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

// export const AuthContext = React.createContext();
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is >>', authUser)
          if(authUser){
            //if the user is logged in/or was logged in 
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          }
          else{
            //if the user is logged out
            dispatch({
              type: 'SET-USER',
              user: null
            })
          }
    }
    )
  },[])
  return (
    //BEM
    <Router>
    <div className="app">
      <Routes>
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/' element = { <><Header/><Home /></>} />
        <Route path='/checkout' element = {<><Header/><Checkout/></>} />
  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
// export {authUser};
