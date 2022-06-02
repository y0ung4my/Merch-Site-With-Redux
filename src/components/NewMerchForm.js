
import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';

function NewMerchForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({brand: event.target.brand.value, name: event.target.name.value, color: event.target.color.value, price: event.target.price.value, size: event.target.size.value, items: parseInt(event.target.items.value), id: v4()});
  }

  return (
    <React.Fragment>
      <div className="card bodyFont p-4 x-50 mx-auto" style={{backgroundColor: "white"}}>
        <h1 className="headingFont" style={{color: "black"}}>Add New Merch Items</h1>
        <hr />
        <ReusableForm 
          formSubmissionHandler={handleNewMerchFormSubmission}
          buttonText='Add Merch!' />
      </div>
    </React.Fragment>
  )
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}

export default NewMerchForm