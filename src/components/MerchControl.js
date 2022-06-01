import React from 'react';
import { v4 } from 'uuid';
import NewMerchForm from './NewMerchForm';
import EditMerchForm from './EditMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import PropTypes from 'prop-types';


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMerchList: [
        {
          item: "Tshirt",
          size: "X-Small",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "Black",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Small",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "White",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Small",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "Blue",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Small",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Small",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Medium",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "X-Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XX-Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
        {
          item: "Tshirt",
          size: "XXX-Large",
          color: "Red",
          quantity: 1,
          price: 20,
          id: v4()
        },
      ],
      selectedMerch: null,
      editing: false,
    };
  }


  // For button that renders with each view
  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

// CRUD: Create New Merch

handleAddingNewMerchToList = (newMerch) => {
  // console.log("New Merch" + newMerch);
  const newMainMerchList = this.state.mainMerchList.concat(newMerch);
  this.setState({
    mainMerchList: newMainMerchList,
    formVisibleOnPage: false
  });
}

// CRUD: Read New Merch
handleChangingSelectedMerch = (id) => {
  const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0];
  // const selectedMerch = this.state.mainMerchList[id];
  this.setState({selectedMerch: selectedMerch});
}

// CRUD: Update New Merch
handleEditClick = () => {
  // console.log("handleEditClick reached!");
  this.setState({editing: true});
}

handleEditingMerchInList = (merchToEdit) => {
  const editedMainMerchList = this.state.mainMerchList
    .filter(merch => merch.id !== this.state.selectedMerch.id)
    .concat(merchToEdit);
  this.setState({
      mainMerchList: editedMainMerchList,
      editing: false,
      selectedMerch: null
    });
}
// CRUD: Delete New Merch
handleDeletingMerch = (id) => {
  const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
  this.setState({
    mainMerchList: newMainMerchList,
    selectedMerch: null
  });
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  // let addMerchButton = null;
  // console.log("The state: " + this.state.formVisibleOnPage);

  // Edit Merch
  if (this.state.editing) {
    currentlyVisibleState = 
    <EditMerchForm 
      merch = {this.state.selectedMerch}
      onEditMerch = {this.handleEditingMerchInList} />
    buttonText = "Return to Merch List";
  
  // Merch Detail
  }
   else if (this.state.selectedMerch != null) {
    currentlyVisibleState = 
    <MerchDetail 
      merch = {this.state.selectedMerch} 
      onClickingDelete = {this.handleDeletingMerch} 
      onClickingEdit = {this.handleEditClick} />
    buttonText = "Return to Merch List";

  // New Merch Form
  } else if (this.state.formVisibleOnPage) {
    // passing mainMerchList down to MerchList here
    currentlyVisibleState = 
    <NewMerchForm 
      onNewMerchCreation={this.handleAddingNewMerchToList}  
    />;
    buttonText = "Return to Merch List";

  // Merch List  
  } else {
    currentlyVisibleState = 
    <MerchList 
      merchList={this.state.mainMerchList} 
      onMerchSelection={this.handleChangingSelectedMerch} 
    />;
    // Because a user will actually be clicking on the Merch in the Merch component, we will need to pass our new handleChangingSelectedMerch method as a prop.
    buttonText = "Add Merch";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

export default MerchControl;