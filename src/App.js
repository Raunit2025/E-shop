import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Account from './components/Account';
import AuthModal from './components/AuthModal';

function App() {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.find((item) => item.id === product.id)) {
                return [...prevWishlist, product];
            }
            return prevWishlist;
        });
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    const handleOpenAuthModal = () => {
        setAuthModalOpen(true);
    };

    return (
        <Router>
            <Navbar
                loggedInUser={loggedInUser}
                onOpenAuthModal={handleOpenAuthModal}
                onLogout={handleLogout}
            />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage addToCart={addToCart} addToWishlist={addToWishlist} />}
                />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                <Route
                    path="/wishlist"
                    element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
                />
                <Route path="/account" element={<Account user={loggedInUser} onLogout={handleLogout} />} />
            </Routes>

            {isAuthModalOpen && (
                <AuthModal onClose={() => setAuthModalOpen(false)} onLogin={setLoggedInUser} />
            )}
        </Router>
    );
}

export default App;
