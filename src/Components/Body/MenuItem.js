import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
const MenuItem = props => {
    // console.log(props);
    return (
        <div className="p-2 col-md-4">
            <Card>
                <CardBody>
                    <CardImg style={{opacity:'0.5'}} width="100%" height="200px" alt={props.dish.name} src={props.dish.image}></CardImg>
                    <CardImgOverlay bottom>
                        <CardTitle onClick={props.DishSelect} style={{cursor:'pointer'}}><h3 >{props.dish.name}</h3>
                        <h5 className="text-primary">See Details</h5>
                        </CardTitle>
                        
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;