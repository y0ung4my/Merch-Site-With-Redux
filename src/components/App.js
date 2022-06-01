import React from "react";
// import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MerchControl from './MerchControl';


function App() {
  return (
    <React.Fragment>
    {/* <div className="container"> */}
      <Header />
      <MerchControl />
    {/* </div> */}
    </React.Fragment>
  );
}

export default App;
