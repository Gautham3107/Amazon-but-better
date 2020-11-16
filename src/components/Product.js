import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </div>
                <div className="product__rating">
                <p>🌟</p>
                <p>🌟</p>
                <p>🌟</p>
            </div>
            </div>

            <img src="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1" alt=""/>

            <button>Add to Cart</button>
        </div>
    )
}

export default Product
