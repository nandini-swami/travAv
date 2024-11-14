import React from 'react';
import './MainHeader.css';
import { FaUser, FaCog, FaBars, FaSearch } from 'react-icons/fa';

function MainHeader() {
    return (
        <header className="main-header">
            <div className="main-header-left">
                <img src="/mainIcon.png" alt="TravAv Logo" className="main-logo" />
                <div className="title-container">
                    <h1 className="main-title">TravAv</h1>
                    <p className="tagline">Your one-stop shop for finding things to do on vacation</p>
                </div>
            </div>
            <div className="main-header-right">
                <FaBars className="header-icon" />
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <FaSearch className="search-icon" />
                </div>
                <FaUser className="header-icon" />
                <FaCog className="header-icon" />
            </div>
        </header>
    );
}

export default MainHeader;
