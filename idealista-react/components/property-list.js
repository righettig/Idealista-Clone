import React from 'react';
import PropertyCard from './property-card';

import { propertyList } from "./property-list.module.css";

const PropertyList = ({ properties, onDelete }) => {
  return (
    <div className={propertyList}>
      {properties.map(property => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PropertyList;