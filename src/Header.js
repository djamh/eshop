import React from 'react';
import "./css/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import useIsMobile from "./Utilities.js";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider.js';

function Header() {
  const isMobile = useIsMobile();
  const [{ basket }, dispatch] = useStateValue();  // Corrected destructuring

  

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
            <Link to='/login' style={{textDecoration:'none'}}>
                <div className="nav_item">
                <span className="nav_itemOne">Hello Guest</span>
                <span className="nav_itemOne">Sign In</span>
                </div>
            </Link>

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