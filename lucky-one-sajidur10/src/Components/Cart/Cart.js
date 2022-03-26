import React from 'react';
import './Cart.css';

const Cart = (props) => {
    var { cart , setCart} = props;

    let total = 0;
    for(const item of cart){
        total = total + item.Price;
    }

    const itemName = cart.map((names) => <li
            key={names.id}
            >{names.name}</li>);

    const resetCart = () =>{
        const newcart=[];
        setCart(newcart)
    }

    const chooseOne = () =>{
        let random_id = Math.floor((Math.random() * cart.length) + 1);
        alert( cart[random_id-1]?.name+" is best choise for you !");
    }

    return (
        <div className="cart-container">
            <h5>Selected Items : {cart.length}</h5>
            <p className="cart-pro-names">{itemName}</p>
            <p className="total-price">Total Cost: $ {total}</p>

            <button className='add-btn'  onClick={chooseOne}>Choose 1 for me</button>
            <button className='add-btn' onClick={resetCart}>Reset cart</button>
        </div>
    );
};

export default Cart;