import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({ id,title,image,rating,price }) {
    const [{basket},dispatch] = useStateValue();
    //console.log(basket);
    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }
    //console.log(item.price);
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    <p> {"⭐".repeat(rating)}</p>
                </div>
            </div>

            <img src={image} alt=""/>

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
    
}

export default Product
