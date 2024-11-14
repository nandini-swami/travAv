import React from 'react';
import './ItineraryHeader.css';

function ItineraryHeader() {
    return (
        <header className="itinerary-header">
            <div className="itinerary-title">MY PLAN</div>
            <nav className="itinerary-nav">
                <button>Home</button>
                <button>Bookmarks</button>
                <button>Categories</button>
            </nav>
        </header>
    );
}

export default ItineraryHeader;
