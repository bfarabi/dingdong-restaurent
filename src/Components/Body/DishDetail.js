import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';
import ComForm from './ComForm';
import Comments from './Comments';

const DishDetail = (props) => {
    return (
        <div className="mt-2 ">
            <Card >
                
                    <CardImg top width="100%" height="" alt={props.dish.name} src={props.dish.image}></CardImg>
                    <CardBody className="text-left">

                        <CardTitle ><h2>{props.dish.name}</h2></CardTitle>
                    <CardText>
                        {props.dish.description}
                     </CardText>
                    <CardText>category: {props.dish.category}</CardText>
                    <CardText>Label: {props.dish.label}</CardText>
                    <CardText>Price: {props.dish.price}</CardText>
                    <h5 className="mb-0 pb-0">Comments :</h5>
                    <hr className="mt-0" />
                
                    <Comments comments={props.comments}></Comments>
                    <hr />
                    <ComForm addComment={props.addComment} dishId={props.dish.id}></ComForm>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;