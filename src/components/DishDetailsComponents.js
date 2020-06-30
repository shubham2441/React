import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { render } from '@testing-library/react';

function RenderCard({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComment({ comments }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p> {comment.author} , {comment.date} </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
class DishDetails extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // console.log(this.props.comments);
    render() {
        return (
            <div className="row">
                <RenderCard dish={this.props.dish} />
                <RenderComment comments={this.props.comments} />
            </div>

        );
    }

}


export default DishDetails 