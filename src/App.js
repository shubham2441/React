import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import './App.css';
import { NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

import {DISHES} from './shared/dishes'
//import { render } from '@testing-library/react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
    render() {
      return (
        <div className="App">
          <Navbar dark color = "primary">
            <div className="container">
              <NavbarBrand href = "/">Ristronte Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
        </div>
      );
    }
  }
  
export default App;
