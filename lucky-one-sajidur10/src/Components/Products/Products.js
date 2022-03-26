import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [items,setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=> setItems(data));
    },[]);

    const handleAddCart = item => {
        const newCart = [...cart, item];
        setCart(newCart);
    }
   
    return (
        <div className='p-3 items-container'>
             <div className="row gx-0 gy-3">
                <div className="col-md-9 col-12">
                    <div className="row gx-0 gy-3">
                        {
                            items.map(item =>
                                <div key={item.id} className="col-md-4 col-sm-6 col-12 p-2">
                                        <Product 
                                        key={item.id}
                                        item={item}
                                        handleAddCart ={handleAddCart}
                                        ></Product>
                                </div>
                             )
                        }
                    </div>
                </div> 

                <div className="col-md-3 col-12">
                    <div className="cart p-5 p-md-0">
                        <Cart setCart={setCart} cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;