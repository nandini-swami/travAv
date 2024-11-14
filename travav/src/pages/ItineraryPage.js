import React from 'react';
import MainHeader from '../components/MainHeader'; // Updated path to point to components
import ItineraryHeader from '../components/ItineraryHeader';
import ItineraryList from '../components/ItineraryList';
import NavigationPanel from '../components/NavigationPanel';

function ItineraryPage() {
    return (
        <div>
            <MainHeader />
            <ItineraryHeader />
            <ItineraryList />
            <NavigationPanel />
        </div>
    );
}

export default ItineraryPage;