import React from 'react';
import './Wishlist.css';

function Wishlist({ wishlist, setWishlist }) {
    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    };

    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-items">
                    {wishlist.map((item) => (
                        <div className="wishlist-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="wishlist-item-image" />
                            <div className="wishlist-item-details">
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                            <button
                                className="remove-button"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;
