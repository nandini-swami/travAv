import React from 'react';
import ItineraryItem from './ItineraryItem';
import './ItineraryList.css';

const itineraryData = [
    {
        date: "October 12",
        events: [
            { name: "Navy Pier", time: "Closes at 9PM" },
            { name: "Chicago Flea Market", time: "11AM - 5PM" }
        ]
    },
    {
        date: "October 13",
        events: [
            { name: "Jazz Festival", time: "3 - 5PM" }
        ]
    }
];

function ItineraryList() {
    return (
        <div className="itinerary-container">
            {itineraryData.map(day => (
                <div key={day.date} className="itinerary-day">
                    <h2>{day.date}</h2>
                    <div className="event-list">
                        {day.events.map(event => (
                            <ItineraryItem key={event.name} event={event} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItineraryList;