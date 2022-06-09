import React from 'react';
import Merch from './Merch';
import PropTypes from 'prop-types'
// import MerchData from './MerchData';

function MerchList(props) {
  return (
    <React.Fragment>
      <h1 className="headingFont" style={{color: "black"}}>Main Merch List</h1>
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      
      {Object.values(props.merchList).map((merch) => 
        <div class="col mb-4">
          <div className= "card shadow-lg h-100 text-left" style={{backgroundColor: "#add8e6"}}>
            <Merch
              whenMerchClicked = {props.onMerchSelection}
              name={merch.name}
              brand={merch.brand}
              color={merch.color}
              price={merch.price}
              size={merch.size}
              items={merch.items}
              id={merch.id}
              key={merch.id}/>
          </div>
        </div>
        )}
      </div>
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.object,
  onMerchSelection: PropTypes.func
};

export default MerchList