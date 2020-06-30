import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import './App.css';
import { NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
//import DishDetails from './components/DishDetailsComponents';

import {DISHES} from './shared/dishes'
import {COMMENTS} from './shared/comments'

//import { render } from '@testing-library/react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments : COMMENTS
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
          <Menu dishes={this.state.dishes} comments={this.state.comments}/>
          {/* <DishDetails dish = {this.state.dish}/> */}
        </div>
      );
    }
  }
  
export default App;
