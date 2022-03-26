import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, id, picture, Price} = props.item;

    return (
        <div>
            <div className="developer">
                <img src={picture} alt="" />
                <h5>{name}</h5>

                <div className="items-info">
                    <p><span className="">ID: </span> {id}</p>
                    <p><span className="">Price: </span> {Price} $</p>
                </div>
                <button onClick={() =>props.handleAddCart(props.item)} className="btn-regular">Add to cart <i className="fa-solid fa-cart-arrow-down"></i></button>
            </div>
        </div>
    );
};

export default Product;