import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
        <h3>{props.size} - {props.item}</h3>
        <h5>{props.color}</h5>
        <h5> X {props.quantity}</h5>
        <p><em> $ {props.price}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  item: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default Merch;