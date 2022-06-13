import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
const MenuItem = props => {
    // console.log(props);
    return (
        <div className="p-2 col-md-4">
            <Card className="shadow m-1 hover-effect" >
                <CardBody onClick={props.DishSelect} style={{cursor:'pointer'}}>
                    <CardImg  width="100%" height="300rem"  alt={props.dish.name} src={props.dish.image}></CardImg>
                    < >
                        <CardTitle ><h3 >{props.dish.name}</h3>
                        <h5 className="text-primary">See Details</h5>
                        </CardTitle>
                        
                    </>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;