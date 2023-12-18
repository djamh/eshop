import React,{ useEffect, useState } from 'react';
import "./css/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import useIsMobile from "./Utilities.js";
import { loadUserBasket } from './Utilities';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider.js';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'; // Ensure this is the correct path to your Firebase config

function Header() {
  const isMobile = useIsMobile();
  const [{ basket }, dispatch] = useStateValue();  // Corrected destructuring
  const [user, setUser] = useState(null); // State to store user info
  

  // Function to extract the username part from the email
    const getUsernameFromEmail = (email) => {
      return email.split('@')[0];
    };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        
        dispatch({
          type: 'SET_USER',
          user: currentUser
        });

        if (currentUser) {
          // User is logged in, load their basket
          loadUserBasket(currentUser.uid, dispatch);
      } else {
          // User is logged out, handle accordingly
          dispatch({ type: 'CLEAR_BASKET' }); // Optional: Clear the basket in your global state
      }
    });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, [dispatch]);


    // Function to handle logout
    const logout = () => {
        auth.signOut();
        setUser(null);
    };

  

  return (
    <div className="header">

        <Link to='/' style={{textDecoration:'none'}}>
        <div className="header_logo">
                <StoreIcon fontSize={isMobile ? 'string' : 'medium'} className="header_logoImage"></StoreIcon>
                <h2 className="header_logoTitle">MagicShop</h2>
        </div>
        </Link>
        <div className="header_searchbar">
                <input type="text" className="header_searchInput" />
                <SearchIcon fontSize={isMobile ? 'string' : 'large'} className="header_searchIcon"></SearchIcon>
        </div>
            
        <div className="header_nav">
        {user ? (
                    <div className="nav_item" onClick={logout}>
                        <span className="nav_itemOne">Hello {getUsernameFromEmail(user.email)}</span>
                        <span className="nav_itemOne">Log Out</span>
                    </div>
                ) : (
                    <Link to='/login' style={{textDecoration:'none'}}>
                        <div className="nav_item">
                            <span className="nav_itemOne">Hello Guest</span>
                            <span className="nav_itemOne">Sign In</span>
                        </div>
                    </Link>
                )}

                <div className="nav_item">
                <span className="nav_itemOne">Your</span>
                <span className="nav_itemOne">Shop</span>
                </div>

                <Link to='/checkout' style={{textDecoration:'none'}}>
                  <div className="nav_item">
                  <ShoppingCartIcon fontSize={isMobile ? 'string' : 'medium'} className="itemBasket"></ShoppingCartIcon>
                  <span className="nav_itemOne nav_basketCount">{basket.length}</span>
                  </div>
                </Link>
                
        </div>

    </div>
  )
}

export default Header