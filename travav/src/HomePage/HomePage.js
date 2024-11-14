import React from 'react';
import '../App.css';
import logo from '../logo.png'; // Import the logo image
import mapImage from '../map.png'; // Import the map image
import menuIcon from '../menu.png'; // Import the menu icon
import profileIcon from '../profile.png'; // Import the profile icon
import settingsIcon from '../settings.png'; // Import the settings icon
import pierImage from '../pier.png'; // Import the pier image



function HomePage() {
    return (
        <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">TravAv</h1>
  <div className="right-header">
    <img src={menuIcon} className="icon" alt="menu" />
    <input type="text" className="search-bar" placeholder="Search..." />
    <img src={profileIcon} className="icon" alt="profile" />
    <img src={settingsIcon} className="icon" alt="settings" />
  </div>
</header>
<p className="App-subtitle">
  Your one-stop shop for finding things to do on vacation
</p>
<div className="main-content">
  <div className="left-content">
    <div className="location-oval">
      <h1 className="location-text">CHICAGO</h1>
    </div>
    <img src={mapImage} className="map-image" alt="map" />
    <div className="filter-oval">
      <div className="inner-oval">
        <p className="add-filter-text">+ Add Filter</p>
      </div>
    </div>
  </div>
  <div className="right-content">
    <div className="bubbles-container">
      <div className="bubble">Categories</div>
      <div className="bubble">Bookmarks</div>
      <div className="bubble">My Trips</div>
    </div>
    <div className="large-oval">
      <img src={pierImage} className="pier-image" alt="pier" />
      <div className="inner-large-oval">
        <div className="top-rectangles">
          <div className="top-rectangle">Navy Pier</div>
          <div className="top-rectangle">+ Add to My Plan</div>
        </div>
        <div className="bottom-rectangle">
          <p><strong>Description:</strong></p>
          <p>The Navy Pier is...</p>
          <p><strong>Reviews:</strong></p>
          <p>I loved the Navy Pier!</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );

}

export default HomePage;
