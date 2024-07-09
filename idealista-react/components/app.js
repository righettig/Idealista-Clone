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

    const handleAddProperty = () => {
        const newProperty = {
            id: sampleProperties.length + 1,
            title: 'New Property',
            address: 'New Location',
            price: '1000',
            image: '',
        };
        setProperties([...sampleProperties, newProperty]);

        fetch('http://localhost:3001/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProperty),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Property added successfully:', data);
        })
        .catch(error => {
            console.error('Error adding property:', error);
        });
    };

    return (
        <div className="app">
            <Banner />
            <Sidebar />
            <h1>Property Listings</h1>
            <PropertyList properties={sampleProperties} />
            <button onClick={handleAddProperty}>Add property</button>
        </div>
    )
}

export default App;