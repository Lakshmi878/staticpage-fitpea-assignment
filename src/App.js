import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Components/Sidebar';
import Home from './Home';

function App() {
  return (
    <div className="d-flex container-fluid min-vh-100">
      <div className="row flex-grow-1">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
