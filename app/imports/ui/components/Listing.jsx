import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Listing = ({ item }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={item.image} width={75} />
      <Card.Title>{item.itemName}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{item.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Listing.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    image: PropTypes.string,
    condition: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Listing;
