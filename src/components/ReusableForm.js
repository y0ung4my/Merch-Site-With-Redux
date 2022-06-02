import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="brand"
          placeholder="Style" />
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="color"
          placeholder="Color" />
        <input
          type="number"
          min={1}
          name="price"
          placeholder="Price" />
        <input
          type="text"
          name="size"
          placeholder="Size" />
        <input 
          type="number"
          min={1}
          name="items"
          placeholder="Items in stock" />
          <button type='submit'>{props.buttonText}</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  formText: PropTypes.string
}; 

export default ReusableForm;