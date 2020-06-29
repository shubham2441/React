// const { Component } = require("react");
import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }

    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish!=null){
            return(
               <CardText>{dish.description}</CardText> 
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
            //     <div key={dish.id} className="col-12 mt-5">
            //         <Media tag="li">
            //             <Media left middle>
            //                 <Media object src={dish.image} alt={dish.name} />
            //             </Media>
            //             <Media body className="ml-5">
            //                 <Media heading>{dish.name}</Media>
            //                 <p>{dish.description}</p>
            //             </Media>
            //         </Media>
            //     </div>
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Row>
                        <Card><Col sm-6>
                        <CardImg width="100%" height="50%" src={dish.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            {this.renderDish(this.state.selectedDish)}    
                            <Button  onClick = {()=>this.onDishSelect(dish)}>Click Here</Button>
                        </CardBody>
                        </Col>
                        </Card>
                    </Row>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}

export default Menu;