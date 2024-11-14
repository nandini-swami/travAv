// src/components/LocationInfo/LocationInfo.js

import React from 'react';
import { FaPencilAlt } from 'react-icons/fa'; // Import the pencil icon
import './LocationInfo.css';

function LocationInfo() {
    return (
        <div className="location-info">
            <h2 className="location-title">Chicago</h2>
            <p className="location-dates">
                October 12-14 
                
                <FaPencilAlt className="edit-icon" /> {/* Add pencil icon next to dates */}
            </p>
        </div>
    );
}

export default LocationInfo;
