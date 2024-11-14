import React from 'react';
import { FaPizzaSlice, FaMusic, FaShip, FaShoppingBag, FaPalette } from 'react-icons/fa'; // Import relevant icons
import './ItineraryItem.css';

function ItineraryItem({ event }) {
    let IconComponent;

    switch (event.name) {
        case "Navy Pier":
            IconComponent = FaShip;
            break;
        case "Chicago Flea Market":
            IconComponent = FaShoppingBag;
            break;
        case "Museum of Art":
            IconComponent = FaPalette;
            break;
        case "Digiorno Pizza":
            IconComponent = FaPizzaSlice;
            break;
        case "Jazz Festival":
            IconComponent = FaMusic;
            break;
        default:
            IconComponent = FaMusic; // Default icon
    }

    return (
        <div className="event-item">
            <IconComponent className="event-icon" />
            <div className="event-details">
                <h3>{event.name}</h3>
                <p>{event.time}</p>
            </div>
            <button className="delete-button">X</button>
        </div>
    );
}

export default ItineraryItem;