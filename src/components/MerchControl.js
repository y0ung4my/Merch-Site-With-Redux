import React from 'react';
// import { v4 } from 'uuid';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import MerchData from './MerchData';
import PropTypes from "prop-types";
import { connect } from 'react-redux';


class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }

  handleAddingNewMerchToList = (newMerch) => {
    const {dispatch} = this.props;  
    const { id, name, brand, color, price, size, items }=newMerch; 
    const action ={ 
      type: 'ADD_MERCH', 
      id: id, 
      name: name, 
      brand: brand, 
      color: color, 
      price: price, 
      size: size, 
      items: items,
    }
    dispatch(action); 
    this.setState({formVisibleOnPage: false});
  }
  

  handleChangingSelectedMerch = (id) => {
    const selectedMerch =this.props.mainMerchList[id];
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeletingMerch = (id) => {
    const {dispatch}= this.props; 
    const action={ 
      type: 'DELETE_MERCH', 
      id: id
    }
    dispatch(action);
    this.setState({selectedMerch: null});
  }
  

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, color, price, size, items } = merchToEdit;
    const action = {
      type: 'ADD_MERCH',
      id: id, 
      name:  name, 
      brand: brand, 
      color: color, 
      price: price, 
      size: size, 
      items: items,     
    }
    dispatch(action);
    this.setState({
      editing: false,
    });
  }


  handleIncreasingMerchStock = (merchToIncrease) => {
    const { dispatch } = this.props;
    const { id, name, brand, color, price, size, items } = merchToIncrease;
    merchToIncrease.items++
    const action = {
      type: 'ADD_MERCH',
      id: id, 
      name:  name, 
      brand: brand, 
      color: color, 
      price: price, 
      size: size, 
      items: items,     
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false,
    });
    }


    handleDecreasingMerchStock = (merchToDecrease) => {
      const { dispatch } = this.props;
      const { id, name, brand, color, price, size, items } = merchToDecrease;
      merchToDecrease.items--;
      const action = {
        type: 'ADD_MERCH',
        id: id, 
        name:  name, 
        brand: brand, 
        color: color, 
        price: price, 
        size: size, 
        items: items,     
      }
      dispatch(action);
      this.setState({
        formVisibleOnPage: false,
      });
      }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditMerchForm merch = {this.state.selectedMerch} onEditMerch = {this.handleEditingMerchInList}/>
      buttonText = "Return to Merch List";

    } else if(this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail 
        merch={this.state.selectedMerch}
        onClickingDecrease={this.handleDecreasingMerchStock}
        onClickingIncrease={this.handleIncreasingMerchStock}
        onClickingDelete={this.handleDeletingMerch}
        onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Merch List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}/>
      buttonText = "Return to Merch List";

    } else {
      currentlyVisibleState = <MerchList merchList={this.props.mainMerchList} onMerchSelection = {this.handleChangingSelectedMerch}/>
      buttonText = "Add Merch";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

MerchControl.propTypes = {
  mainMerchList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainMerchList: state
  }
}

MerchControl = connect(mapStateToProps)(MerchControl);

export default MerchControl;