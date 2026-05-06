import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Applyloan.css";

function ApplyLoan() {

    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        amount: '',
        tenure: '',
        purpose: '',
    });

    const handleSumbit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    amount: formData.amount,
                    tenure: formData.tenure,
                    purpose: formData.purpose,
                }),
            });
             const data = await response.json();
             if (!res.ok) {
                 alert (    data.error || 'Failed to apply for loan');
                } else {
                    alert('Loan application submitted successfully');
                }
             }
            catch (error) {
                console.error('Error applying for loan:', error);
                alert('An error occurred while applying for the loan. Please try again later.');
            }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="apply-loan-container">
            <h1>Apply for a Loan</h1>
            <form onSubmit={handleSumbit} className="apply-loan-form">
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </label>    
                <label>
                    Tenure (months):
                    <input  
                        type="number"
                        name="tenure"
                        value={formData.tenure}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Purpose:
                    <input
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default ApplyLoan;
