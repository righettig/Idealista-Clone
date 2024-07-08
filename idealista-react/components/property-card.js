import React from 'react';
import PropTypes from 'prop-types';

import styles from "./property-card.module.css";

const PropertyCard = ({ property }) => {
  return (
    <div className={styles["property-card"]}>
      <img src={property.image} alt={property.title} className={styles["property-image"]} />
      <div className={styles["property-details"]}>
        <h3>{property.title}</h3>
        <p>{property.address}</p>
        <p>{property.price}</p>
        <button className={styles["property-contact-button"]}>Contact</button>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image:   PropTypes.string.isRequired,
    title:   PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price:   PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;