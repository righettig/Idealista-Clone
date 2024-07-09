import Banner from "./banner";
import Sidebar from "./sidebar";
import PropertyList from './property-list';
import React, { useEffect, useState, useCallback } from 'react';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sampleProperties, setProperties] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/properties')
    //         .then(response => response.json())
    //         .then(data => setProperties(data))
    //         .catch(error => console.error('Error fetching properties:', error));
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/properties');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    const handleAddProperty = useCallback(() => {
        const newProperty = {
            id: sampleProperties.length + 1,
            title: 'New Property',
            address: 'New Location',
            price: '1000',
            image: '',
        };
        setProperties(prevProperties => [...prevProperties, newProperty]);

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
    }, [sampleProperties]);

    const handleDeleteProperty = useCallback((propertyId) => {
        setProperties(prevProperties => prevProperties.filter(property => property.id !== propertyId));

        fetch(`http://localhost:3001/properties/${propertyId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Property deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting property:', error);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="app">
            <Banner />
            <Sidebar />
            <h1>Property Listings</h1>
            <PropertyList
                properties={sampleProperties}
                onDelete={handleDeleteProperty} 
            />
            <button onClick={handleAddProperty}>Add property</button>
        </div>
    )
}

export default App;