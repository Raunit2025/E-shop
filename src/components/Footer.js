import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We are an online store offering the best products at competitive prices. Your satisfaction is our priority!</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/account">Account</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@eshop.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Follow us on:
                        <a href="#" className="social-link"> Facebook</a>,
                        <a href="#" className="social-link"> Twitter</a>,
                        <a href="#" className="social-link"> Instagram</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
