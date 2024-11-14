import React from 'react';
import './ItineraryHeader.css';

function ItineraryHeader() {
    return (
        <header className="itinerary-header">
            <h1>MY PLAN</h1>
            <nav>
                <button>Home</button>
                <button>Bookmarks</button>
                <button>Categories</button>
            </nav>
        </header>
    );
}

export default ItineraryHeader;