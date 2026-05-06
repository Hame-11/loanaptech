import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-grid">


                    <div className="footer-brand">
                        <h2>LoanAptech</h2>
                        <p>
                            Your trusted partner for fast, flexible, and transparent loan solutions.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/loan-products">Loan Products</Link></li>
                            <li><Link to="/apply-now">Apply Now</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>


                    <div className="footer-contact">
                        <h3>Get in Touch</h3>
                        <p>Email: support@yourbrand.com</p>
                        <p>Phone: +1 (555) 456-7890</p>
                        <p>Hours: Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                        <p>Location: Houston, TX</p>
                    </div>

                </div>


                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} LoanAptech. All rights reserved.</p>
                    <p>Licensed by relevant financial authorities.</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;