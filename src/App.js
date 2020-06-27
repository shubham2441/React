import React from 'react';
import { Navbar } from 'reactstrap';
import './App.css';
import { NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color = "primary">
        <div className="container">
          <NavbarBrand href = "/">Ristronte Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
