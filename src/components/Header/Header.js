import React from 'react';
import './Header.css';

const Header = () => {
    return <div className="header">
        <div className="content">
            <div className="header-item-container">
                <a className="header-item" href="./">Register</a>
                <a className="header-item" href="./">Sign in</a>
                <div className="shoping-cart">
                    <a href="./">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>empty</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default Header;