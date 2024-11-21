import React, { useState } from 'react';
import './Cart.css';

function Cart({ cart }) {
    const [cartItems, setCartItems] = useState(cart);


    const updateQuantity = (id, operation) => {
        setCartItems((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    const newQuantity = operation === 'increase' ? item.quantity + 1 : item.quantity - 1;
                    if (newQuantity >= 1) {
                        return { ...item, quantity: newQuantity };
                    }
                }
                return item;
            });
        });
    };


    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    };


    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                                </div>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="cart-total">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default Cart;
