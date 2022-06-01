import React from 'react';
import PropTypes from 'prop-types';
import Merch from './Merch';
import MerchData from './MerchData';

function MerchList(props){

  return (
    <React.Fragment>
      <hr />
      {props.merchList.map((merch) =>
        <Merch
          whenMerchClicked = { props.onMerchSelection }
          item = {merch.item}
          size = {merch.size}
          color = {merch.color}
          quantity = {merch.quantity}
          price = {merch.price}
          id = {merch.id}
          key = {merch.id}/>
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchList;