import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return <div className="navigation">
        <div className="brand">
            <a href="./">
                <h1>Avenue</h1>
                <h1>Fassion</h1>
            </a>
        </div>
        <div className="menu">
            <div className="item">
                <a href="./">Mans</a>
                <i className="fa-solid fa-angle-down"></i>
                <div className="dropdown">
                    <div className="dropdown-category">
                        <h1 className="dropdown-title">Casuals</h1>
                        <a href="./" className="dropdown-item">Jackets</a>
                        <a href="./" className="dropdown-item">Hoodies & Sweatshirts</a>
                        <a href="./" className="dropdown-item">Polo Shirts</a>
                        <a href="./" className="dropdown-item">Sportswear</a>
                        <a href="./" className="dropdown-item">Trousers & Chinos</a>
                        <a href="./" className="dropdown-item">Sportswear</a>
                        <a href="./" className="dropdown-item">T-Shirts</a>
                    </div>
                </div>
            </div>
            <div className="item">
                <a href="./">Womens</a>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="item">
                <a href="./">The brand</a>
            </div>
            <div className="item">
                <a href="./">Locale store</a>
            </div>
            <div className="item">
                <a href="./">Look book</a>
                <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
    </div>
};

export default Navigation;