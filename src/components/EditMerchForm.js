import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchForm(props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({
      item: event.target.item.value, 
      size: event.target.size.value, 
      color: event.target.color.value, 
      quantity: parseInt(event.target.quantity.value), 
      price: parseInt(event.target.price.value), 
      id: merch.id
      
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update Merch" />
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
};

export default EditMerchForm;

