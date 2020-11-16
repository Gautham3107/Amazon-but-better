import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket},dispatch] = useStateValue();
    return (
        
        <div className="checkout">
            
            <div className="checkout__left">
                <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5BL-4uOu54AsSUMbL18odm9dzUVzuj9scBA&usqp=CAU" alt=""/>
                
                <div>
                    <h2 className="checkout__title">Shopping Cart</h2>
                    {/* BasketItem */}
                    {basket.map((item)=> 
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />)}
                    {/* BasketItem */}
                    {/* BasketItem */}

                </div>
            </div>
            
            
            <div className="checkout__right">
                <Subtotal />
            </div>

            
        </div>
    )
}

export default Checkout;
