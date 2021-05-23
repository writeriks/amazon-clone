import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popover from '@material-ui/core/Popover';
import {Link} from 'react-router-dom';
import authReducerSelector from '../redux-reducer/auth-reducer/auth-reducer-selector';
import basketReducerSelector from '../redux-reducer/basket-reducer/basket-reducer-selector'
import displayReducerSelector from '../redux-reducer/display-reducer/display-reducer-selector'

import MyAccount from '../Popover/my-account-popover';
import {useSelector} from 'react-redux'
import headerHelper from './header-helper';

function Header() {
    const basket = useSelector(basketReducerSelector.getBasket)
    const user = useSelector(authReducerSelector.getFirebaseUser)
    const popoverAnchorElement = useSelector(displayReducerSelector.getPopoverAnchorElement)

    const {openMyAccountPopover, closeMyAccountPopover} = headerHelper;

    const helloMessage = user ? `Hello ${user?.email}` : 'Hello Guest';
    const popoverId = !!popoverAnchorElement ? 'account-popover' : undefined;

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
                <div>
                    <div className="header__option"
                        onClick={openMyAccountPopover}>
                        <span className="header__optionOnLineOne">{helloMessage}</span>
                        <span className="header__myAmazon">My Amazon
                    <ArrowDropDownIcon />
                        </span>
                    </div>
                    <Popover
                        id={popoverId}
                        open={!!popoverAnchorElement}
                        anchorEl={popoverAnchorElement}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        onClose={closeMyAccountPopover}
                    >
                        <MyAccount />
                    </Popover>
                </div>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionOnLineOne">Returns</span>
                        <span className="header__optionOnLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/checkout" className="checkout__container">
                    <div className="header__option">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionOnLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Header
