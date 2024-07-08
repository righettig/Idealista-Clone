import React from 'react';
import PropertyCard from './property-card';

import { propertyList } from "./property-list.module.css";

const PropertyList = ({ properties }) => {
  return (
    <div className={propertyList}>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;