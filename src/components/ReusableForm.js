import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className="text-left">
        {/* <div className="form-group">
          <label for="item">Item</label> */}
          <input type="text"
                 item="item"
                 placeholder="item" />
        {/* </div> */}

        {/* <div className="form-group"> */}
          {/* <label for="size">Size</label> */}
          <input type="text"
                 size="size"
                 placeholder="Size" />
        {/* </div> */}

        {/* <div className="form-group">
          <label for="color">Color</label> */}
          <input type="text"
                 color="color"
                 placeholder="Color" />
        {/* </div> */}

        {/* <div className="form-group">
          <label for="quantity">Quantity</label> */}
          <input type="text"
                 quantity = "quantity"
                 placeholder="Quantity" />
        {/* </div> */}

        {/* <div className="form-group">
          <label for="price">Price</label> */}
          <input type="text"
                 price="price"
                 placeholder="Price" />
        {/* </div> */}
        <button type='submit'>{props.buttonText}</button>
        {/* <button type='submit'>Update This Item</button> */}
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  formText: PropTypes.string
};

export default ReusableForm;
