import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="image" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct__rating">
                    <p> {"⭐".repeat(rating)}</p>
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
