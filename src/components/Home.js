import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg" alt="amazonBanner"/>

                <div className="home__row">
                    <Product
                        id="321465"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        image="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1"
                        rating={5}
                        price={15.99}
                    />
                    <Product 
                        id="421465"
                        title="Faber 14 Place Settings Dishwasher ( FFSD 8PR 14S, Silver, Power 3D Wash for Tough Stains, Silent operation )"
                        image="https://images-na.ssl-images-amazon.com/images/I/61uj6HPKWbL._SL1500_.jpg"
                        rating={4}
                        price={159.99}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="521465"
                        title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)"
                        image="https://images-na.ssl-images-amazon.com/images/I/71zlbKfhFsL._SL1500_.jpg"
                        rating={5}
                        price={399.99}
                    />
                    <Product 
                        id="621465"
                        title="Wildcraft SUPERMASK W95+ Reusable Outdoor Respirator 3P : SUBLIPRINT : BLK_TRIZI : L"
                        image="https://images-na.ssl-images-amazon.com/images/I/71aqQQRdbtL._UL1500_.jpg"
                        rating={3}
                        price={9.90}
                    />
                    <Product 
                        id="721465"
                        title="The Man Company Cleanse & Moisturise Pack (Charcoal Face Wash Charcoal Scrub Moisturising Cream) | Made in India"
                        image="https://images-na.ssl-images-amazon.com/images/I/61IDfNbGkrL._SL1080_.jpg"
                        rating={4}
                        price={9.99}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="921465"
                        title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
                        image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                        rating={5}
                        price={199.95}
                    />
                    
                </div>
                </div>

            
        </div>
    )
}

export default Home
