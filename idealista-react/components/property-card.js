import React from 'react';
import PropTypes from 'prop-types';

import styles from "./property-card.module.css";

const PropertyCard = ({ property, onDelete }) => {
  return (
    <div className={styles["property-card"]}>
      <img src={property.image} alt={property.title} className={styles["property-image"]} />
      <div className={styles["property-details"]}>
        <h3>{property.title}</h3>
        <p>{property.address}</p>
        <p>{property.price}</p>
        <button className={styles["property-contact-button"]}>Contact</button>
        <button
            className={styles["property-delete-button"]}
            onClick={() => onDelete(property.id)}
            aria-label={`Delete ${property.title}`}
          >
            Delete
          </button>
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

const PropertyCardMemo = React.memo(PropertyCard);

export default PropertyCard;

export { PropertyCardMemo };