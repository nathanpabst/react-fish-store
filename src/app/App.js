import React, { Component } from 'react';
import './App.css';

import Fish from '../components/Fish/Fish';
import Home from '../components/Home/Home';
import Inventory from '../components/Inventory/Inventory';
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import New from '../components/New/New';
import Order from '../components/Order/Order';
import OrderSpa from '../components/OrderSpa/OrderSpa';
import Register from '../components/Register/Register';
import SingleOrder from '../components/SingleOrder/SingleOrder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Fish Store</h1>
          <div className="App">
            <div className="col-sm-12">
              <Fish />
            </div>
            <div className="col-sm-12">
              <Home />
            </div>
            <div className="col-sm-12">
              <Inventory />
            </div>
            <div className="col-sm-12">
              <Login />
            </div>
            <div className="col-sm-12">
              <Navbar />
            </div>
            <div className="col-sm-12">
              <New />
            </div>
            <div className="col-sm-12">
              <Order />
            </div>
            <div className="col-sm-12">
              <OrderSpa />
            </div>
            <div className="col-sm-12">
              <Register />
            </div>
            <div className="col-sm-12">
              <SingleOrder />
            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default App;
