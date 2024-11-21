import React from 'react';
import './Account.css';

function Account({ user, onLogout }) {
    if (!user) {
        return <p>You are not logged in. Please sign in.</p>;
    }

    return (
        <div className="account-container">
            <h2>My Account</h2>
            <div className="account-details">
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
            <button onClick={onLogout} className="logout-button">Logout</button>
        </div>
    );
}

export default Account;
