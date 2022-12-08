import React from 'react';
import {withRouter, ButtonContainer} from '../Utils.js';
import {Link} from 'react-router-dom';
import {getProduct} from '../productService.js';

function ProductDetails(props) {
    const { name, image, price, description} = getProduct(props.router.params.id);
    console.log(name)
    return (
        <div className="container">
            <div className="mx-auto text-center my-4">
                <h1>{name}</h1>
            </div>
            <div className="row" style={{"backgroundColor":"#f6f6f6"}}>
                <div className="col-10 mx-auto col-md-6 my-3" style={{'borderRight': "solid black 3px"}}>
                    <img src={image} className="img-fluid mx-auto col-6" alt="product" />
                    {/* <img src={require(`../${secondImage}`)} className="img-fluid mx-auto col-6" alt="product" /> */}
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model:{name}</h2>
                    {/* <h4 className="text-title text-uppercase text-muted mt-2 mb-1">
                        made by: <span className="text-uppercase">{company}</span>
                    </h4> */}
                    <h4 className="text-blue">
                        <strong>
                            Price : <span>$</span>{price}
                        </strong>
                    </h4>
                    {/* <p className="text-capitalize font-weight-bold mt-2 mb-0">
                            Buy at {company}
                    </p> */}
                    <p className="text-muted lead">
                        {description}
                    </p>
                    
                    <Link to="/">
                            <ButtonContainer>
                                back to products
                            </ButtonContainer>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ProductDetails);