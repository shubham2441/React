// const { Component } = require("react");
import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle
} from 'reactstrap';
import DishDetails from './DishDetailsComponents';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish, comments) {
        console.log(comments);
        if (dish != null) {
            return (
                <DishDetails dish={dish} comments={comments.filter((comment) => comment.dishId === dish.id)} />
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish, this.props.comments)}
                </div>
            </div>
        );
    }
}


export default Menu;