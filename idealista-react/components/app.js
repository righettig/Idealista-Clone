import Banner from "./banner";
import Sidebar from "./sidebar";
import PropertyList from './property-list';
import React, { useEffect, useState } from 'react';

const App = () => {
    const [sampleProperties, setProperties] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/properties')
            .then(response => response.json())
            .then(data => setProperties(data))
            .catch(error => console.error('Error fetching properties:', error));
    }, []);

    return (
        <div className="app">
            <Banner />
            <Sidebar />
            <h1>Property Listings</h1>
            <PropertyList properties={sampleProperties} />
        </div>
    )
}

export default App;