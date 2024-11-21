
import React, { useState } from 'react';
import './AuthModal.css';

function AuthModal({ onClose, onLogin }) {
    const [isSigningUp, setIsSigningUp] = useState(false); 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [registeredUsers, setRegisteredUsers] = useState([
        { email: 'raunit@gmail.com', password: '123456', username: 'Raunit1' },
    ]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};

        if (isSigningUp) {
            if (!formData.firstName) {
                errors.firstName = 'First name is required';
            }

            if (!formData.lastName) {
                errors.lastName = 'Last name is required';
            }

            if (!formData.phone) {
                errors.phone = 'Phone number is required';
            } else if (!/^\d{10}$/.test(formData.phone)) {
                errors.phone = 'Phone number must be 10 digits';
            }

            if (!formData.username) {
                errors.username = 'Username is required';
            }

            if (!formData.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = 'Invalid email address';
            } else if (registeredUsers.some(user => user.email === formData.email)) {
                errors.email = 'Email is already registered';
            }

            if (!formData.password) {
                errors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            }

            if (formData.password !== formData.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
        } else {
            if (!formData.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = 'Invalid email address';
            }
            if (!formData.password) {
                errors.password = 'Password is required';
            }
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            if (isSigningUp) {
                setRegisteredUsers([
                    ...registeredUsers,
                    {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        phone: formData.phone,
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                    },
                ]);
                alert('Signup successful! Please sign in.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                setIsSigningUp(false); 
            } else {
                
                const user = registeredUsers.find(
                    user =>
                        user.email === formData.email &&
                        user.password === formData.password
                );
                if (user) {
                    alert(`Welcome back, ${user.username}!`);
                    onLogin(user); 
                    onClose();
                } else {
                    alert('Invalid email or password');
                }
            }
        }
    };

    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
                <form onSubmit={handleSubmit} noValidate>
                    {isSigningUp && (
                        <>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={errors.firstName ? 'error' : ''}
                                />
                                {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={errors.lastName ? 'error' : ''}
                                />
                                {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? 'error' : ''}
                                />
                                {errors.phone && <p className="error-text">{errors.phone}</p>}
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={errors.username ? 'error' : ''}
                                />
                                {errors.username && <p className="error-text">{errors.username}</p>}
                            </div>
                        </>
                    )}
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error' : ''}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>
                    {isSigningUp && (
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? 'error' : ''}
                            />
                            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                        </div>
                    )}
                    <button type="submit" className="submit-button">
                        {isSigningUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p>
                    {isSigningUp
                        ? 'Already have an account? '
                        : "Don't have an account? "}
                    <span onClick={() => setIsSigningUp(!isSigningUp)} className="toggle-link">
                        {isSigningUp ? 'Sign In' : 'Sign Up'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default AuthModal;
