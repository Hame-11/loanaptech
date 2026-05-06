import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">Welcome to LoanAptech</h1>
                <p className="hero-subtitle">Get instant personal loans up to $50,000 with low interest rates and no hidden fees.</p>
                <Link to="/apply" className="hero-cta-btn">Apply Now,Its Free</Link>
                <div className='features-grid'>
                    <div className='feature-card'>
                        <h2 className='feature-icon'>Lightning Fast</h2>
                        <h3>Lightning Fast Approval</h3>
                        <p>Get decison in under 10 minutes.</p>
                    </div>
                    <div className='feature-card'>
                        <h2 className='feature-icon'>No Paperwork</h2>
                        <h3>No Paperwork required</h3>
                        <p>100% Digital & Hassle-free.</p>
                    </div>
                    <div className='feature-card'>
                        <h2 className='feature-icon'>Best Rates</h2>
                        <h3>Lower Interest Rates</h3>
                        <p>Starting from just 8.99% pa.</p>
                    </div>
                </div>
                <div className='home-links'>Already Applied? <Link to="/status" className='home-link'>Check Loan Status</Link> {'•'} <Link to="/dashboard" className='home-link'>View Dashboard</Link></div>
            </section>
        </div>
    );
}   
export default Home;