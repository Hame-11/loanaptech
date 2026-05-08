import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData,
             [e.target.name]: e.target.value 
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });
            const data = await response.json();
            if (response.ok) {
                navigate('/dashboard');
            } else {
                setError(data.error || 'Failed to login. Please try again.');
            }
        } catch (err) {
            setError('Failed to login. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <h2>Welcome Back</h2> 
            <form onSubmit={handleSubmit}>
                {error && <div style={{color: 'red', marginBottom: '10px', textAlign: 'center'}}>{error}</div>}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p style={{color: 'white', textAlign: 'center', marginTop: '20px'}}>
                Don't have an account? <Link to="/signup" style={{color: '#a78bfa'}}>Sign up</Link>
            </p>
        </div>
    );
};

export default Login;
