import React,{useContext} from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from './firebase';
// import AuthContext from './App'

function Header() {
  // const AuthContext = React.createContext();
  // const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication=()=>{
    if(user){
      // console.log('logged out')
      // console.log('user is',auth)
      // console.log('hjkhsjdgkjas',user)
      signOut(auth)
              .then(()=>{
                alert('logged out successfully')
              }).catch(()=>console.log('failed'))
    }
    else{
      navigate('/login')
    }
}
// const signCheck =()=>{
  // return 'sign Out'
  // if(!user){
  //   return 'Sign In'
  // }
  // else{
  //   return 'Sign out'
    
  // }
// }
  return (
    <div className='header'>
      <Link to = '/'>
      <img className='header-logo' src ='amazon-logo1.png' alt = '' />
      </Link>
      
      <div className='header-search'>
        <input className='search-input' type='text'/>
        <SearchIcon className='searchicon'/>
      </div>
      <div className='header-nav'>
        <div className='nav-1' >
            <span className='nav-1.1'>
                 Hello Guest
            </span>
            {/* <Link to={ !user && '/login'}> */}
            <span className='nav-12' onClick={handleAuthentication}>  

               {user ?'Sign Out': 'Sign In' }
            </span>
            {/* </Link> */}
        </div>
        <div className='nav-1'>
            <span className='nav-1.1'>
                returns
            </span>
            <span className='nav-1.2'>
                & orders
            </span>
        </div>
        <div className='nav-1'>
            <span className='nav-1.1'>
               your
            </span>
            <span className='nav-1.2'>
               prime
            </span>
        </div>
        <Link to = '/checkout'>
        <div className='header-option-basket'>
          <ShoppingBasketIcon/>
          <span className='nav-1.2 basketcount'>{basket?.length}</span>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header
