import React from 'react'
import PropTypes from 'prop-types'

function MerchDetail(props) {
  const { merch, onClickingDelete, onClickingIncrease, onClickingDecrease } = props;
  const items = merch.items === 0 ? "Out of Stock" : merch.items;

  const buyButton = merch.items === 0 ? <p></p> : <button onClick={() => onClickingDecrease(merch.id)}>Buy</button>
  return (
    <React.Fragment>
      <div className="card shadow-lg w-75 mx-auto" style={{fontSize: 24, color: "black"}}>
        <div className="headingFont card-header text-center text-black" style={{fontSize: 24, color: "black"}}>{merch.brand}</div>
          <div className="card-body">
            <h1>Merch Details:</h1>
            <hr />
            <h3>Brand: {merch.brand}</h3>
            <h3>Item: {merch.name}</h3>
            <hr />
            <p>Color: {merch.color}</p>
            <p>Size: {merch.size}</p>
            <p>Price: ${merch.price}</p>
            <p>Items Available: {items}</p>
          </div>
          <div className="card-footer justify-content-center">
          {buyButton}
          <br/>
            <button onClick={props.onClickingEdit} className="btn shadow mr-2 updateBtn">Update Merch</button>
            <button onClick={() => onClickingDelete(merch.id)} className="btn shadow deleteBtn">Delete Merch</button>
            <button onClick={() => onClickingIncrease(merch.id)} className="btn shadow deleteBtn">Restock</button>
          </div>
        </div>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrease: PropTypes.func,
  onClickingDecrease: PropTypes.func
}

export default MerchDetail