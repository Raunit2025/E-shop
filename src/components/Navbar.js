import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ loggedInUser, onOpenAuthModal, onLogout }) {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">LocalE-Shop</Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/cart" className="navbar-link">Cart</Link>
                <Link to="/wishlist" className="navbar-link">Wishlist</Link>
                {loggedInUser ? (
                    <>
                        <Link to="/account" className="navbar-link">Account</Link>
                        <button onClick={onLogout} className="navbar-link logout-button">Logout</button>
                    </>
                ) : (
                    <button onClick={onOpenAuthModal} className="navbar-link auth-button">
                        Sign In / Sign Up
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
