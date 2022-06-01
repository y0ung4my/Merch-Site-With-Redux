import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
  const { merch, onClickingDelete, onClickingEdit, onClickingBuy } = props;

  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>{merch.item} - {merch.price}</h3>
      <p>{merch.color}</p>
      <p>{merch.size}</p>
      <p>{merch.quantity}</p>
      {/* <button onClick={()=> onClickingEdit(merch.id) }>Update Merch</button> */}
      <button onClick={ props.onClickingEdit }>Update Merch</button>
      <button onClick={()=> onClickingDelete(merch.id) }>Delete Merch</button>
      <hr/>
      </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;