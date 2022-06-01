import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewMerchForm(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.value);
    props.onNewMerchCreation({
      item: event.target.item.value,     
      size: event.target.size.value, 
      color: event.target.color.value, 
      price: parseInt(event.target.price.value), 
      quantity: parseInt(event.target.quantity.value), 
      id: v4()});
    console.log(event.target.item.value);
  }

  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Add new Merch" 
        formSubmissionHandler={handleNewMerchFormSubmission} />
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}

export default NewMerchForm;