// src/pages/ItineraryPage.js

import React from 'react';
import MainHeader from '../components/MainHeader'; // Updated path to point to components
import ItineraryHeader from '../components/ItineraryHeader';
import LocationInfo from '../components/LocationInfo'; // Import the new LocationInfo component
import ItineraryList from '../components/ItineraryList';
import NavigationPanel from '../components/NavigationPanel';

function ItineraryPage() {
    return (
        <div>
            <MainHeader />
            <ItineraryHeader />
            <LocationInfo />  {/* New LocationInfo component */}
            <ItineraryList />
            <NavigationPanel />
        </div>
    );
}

export default ItineraryPage;
