import '../App.css';
import React from 'react';
import Header from './Header';
import MerchControl from './MerchControl';
// import { MDBRipple } from 'mdb-react-ui-kit';

function App() {
  return (
    <React.Fragment>
      <div className="text-center" style={{backgroundColor: '#212529'}}>
        <Header />
      </div>
      <div className="container mb-5">
        <div className="text-center">
          <MerchControl />
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;