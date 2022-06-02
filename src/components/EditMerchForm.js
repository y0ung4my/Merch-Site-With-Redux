import React from 'react'
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditMerchForm(props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({
      brand: event.target.brand.value, 
      name: event.target.name.value, 
      color: event.target.color.value, 
      size: event.target.size.value, 
      items: parseInt(event.target.items.value), 
      price: parseInt(event.target.price.value), 
      id: merch.id
    });
  }
  return (
    <React.Fragment>
      <div className="card bodyFont p-4 w-50 mx-auto" style={{backgroundColor: "white"}}>
      <h1 className="headingFont" style={{color: "black"}}>Edit This Item</h1>
        <hr />
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText='Update Merch' />
      </div>
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
}

export default EditMerchForm
