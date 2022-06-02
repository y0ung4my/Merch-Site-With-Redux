import React from 'react'
import PropTypes from 'prop-types'


function Merch(props) {
  const stockCheck = props.items === 0 ? "Out of Stock" : props.items;
  
  return (
    <React.Fragment>
      <div onClick= {() => props.whenMerchClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p>Color: {props.color}</p>
        <p>Price: ${props.price}</p>
        <p>Size: {props.size}</p>
        <p>Items available: {stockCheck}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,  
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
}

export default Merch;