import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from '../Provider/StateProvider';

function Header() {
    const [{basket},] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon" />
            </Link>

            <div className="header_search">
                <input className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionOnLineOne">Hello Guest</span>
                        <span className="header__optionOnLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionOnLineOne">Returns</span>
                    <span className="header__optionOnLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOnLineOne">Your</span>
                    <span className="header__optionOnLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionOnLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header
