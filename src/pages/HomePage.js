import React, { useState } from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import './HomePage.css';

function HomePage({ addToCart, addToWishlist }) {
    const [products] = useState([
        { id: 1, name: 'Printer', price: 1499, image: '/images/product_1.jpg' },
        { id: 2, name: 'Electric Bill Meter', price: 1199, image: '/images/product_2.jpg' },
        { id: 3, name: 'Amplifier', price: 1499, image: '/images/product_3.jpeg' },
        { id: 4, name: 'USB Adapter', price: 299, image: '/images/product1.jpeg' },
        { id: 5, name: 'Accessories', price: 199, image: '/images/product2.jpeg' },
        { id: 6, name: 'Plastic Shelf', price: 299, image: '/images/product3.jpeg' },
        { id: 5, name: 'Electronic Starter', price: 1999, image: '/images/product7.jpeg' },
        { id: 6, name: 'Micro Pipette', price: 2999, image: '/images/product8.jpg' },
    ]);

    return (
        <div className="home-container">
            <Slider /> 
            <header className="home-header">
                <h1 className="home-heading">Welcome to Our E-commerce Site!</h1>
            </header>
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">₹{product.price}</p>
                            <div className="product-buttons">
                                <button onClick={() => addToCart(product)} className="button">Cart</button>
                                <button onClick={() => addToWishlist(product)} className="button secondary">Wishlist</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer /> 
        </div>
    );
}

export default HomePage;
