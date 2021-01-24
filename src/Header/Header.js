import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon" />

            <div className="header_search">
                <input className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOnLineOne">Hello Guest</span>
                    <span className="header__optionOnLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOnLineOne">Returns</span>
                    <span className="header__optionOnLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOnLineOne">Your</span>
                    <span className="header__optionOnLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionOnLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div >
    )
}

export default Header
