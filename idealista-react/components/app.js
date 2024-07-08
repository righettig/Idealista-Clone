import Banner from "./banner";
import Sidebar from "./sidebar";
import PropertyList from './property-list';

const sampleProperties = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Beautiful Family House',
        address: '123 Main St, Springfield',
        price: '$500,000',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Modern Apartment',
        address: '456 Elm St, Metropolis',
        price: '$350,000',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: 'Cozy Cottage',
        address: '789 Oak St, Smalltown',
        price: '$250,000',
    },
];

const App = () => {
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