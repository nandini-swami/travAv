import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage'; // Import HomePage
import ItineraryPage from './pages/ItineraryPage'; // Import ItineraryPage
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Links */}
                <nav>
                    <Link to="/">Home</Link> | {/* Link to HomePage */}
                    <Link to="/itinerary">Itinerary</Link> {/* Link to ItineraryPage */}
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Route to HomePage */}
                    <Route path="/itinerary" element={<ItineraryPage />} /> {/* Route to ItineraryPage */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
