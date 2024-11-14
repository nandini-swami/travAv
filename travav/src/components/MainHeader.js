import React from 'react';
import './MainHeader.css';
import { FaUser, FaCog, FaBars, FaSearch } from 'react-icons/fa';
// import mainIcon from '../../assets/main_icon.png'; // Adjust the path as needed

function MainHeader() {
    return (
        <header className="main-header">
            <div className="main-header-left">
                {/* <img src={mainIcon} alt="TravAv Logo" className="main-logo" /> */}
                <h1 className="main-title">TravAv</h1>
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
