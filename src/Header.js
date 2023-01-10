import React from 'react';
import logo from './assets/amazon-logo_rgb_rev._CB1549435885_.png';
import SearchIcon from '@mui/icons-material/Search';
import '../src/header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div class="header">
      <img className="header__logo" src={logo} alt="" srcset="" />
      <div className="header__search">
        <input type="text" name="" id="" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__searchLineOne">Hello Guest </span>
          <span className="header__searchLineTwo">SignIn</span>
        </div>
        <div className="header__option">
          <span className="header__searchLineOne">Returns</span>
          <span className="header__searchLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          {' '}
          <span className="header__searchLineOne">Your</span>
          <span className="header__searchLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
