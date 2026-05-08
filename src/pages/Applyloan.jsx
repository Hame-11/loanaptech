import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Applyloan.css";

function Applyloan() {

    const [formData, setFormData] = useState({
        amount: '',
        tenure: '',
        purpose: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/loans/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    amount: formData.amount,
                    duration: formData.tenure,
                    purpose: formData.purpose,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Loan application submitted successfully');
            } else {
                alert(data.error || 'Failed to apply for loan');
            }
        } catch (error) {
            console.error('Error applying for loan:', error);
            alert('An error occurred while applying for the loan. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="apply-loan-container">
            <div className="apply-card">
                <h1 className="apply-title">Apply for a Loan</h1>
                <form onSubmit={handleSubmit} className="apply-form">
                        <div className="input-group">
                        <label>Your Fullname:</label>
                        <input
                    type="text"
                    name="name"
                    placeholder="Fullname"
                    value={formData.name}
                    onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label>Your Email:</label>
                        <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label>Amount:</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Enter loan amount"
                            min="1"
                            step="1"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Tenure (months):</label>
                        <input
                            type="number"
                            name="tenure"
                            value={formData.tenure}
                            onChange={handleChange}
                            placeholder="Enter tenure in months"
                            min="1"
                            step="1"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Purpose:</label>
                        <input
                            type="text"
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            placeholder="e.g., Home renovation, Education"
                            required
                        />
                    </div>
                    <button type="submit" className="apply-submit-btn">Submit Application</button>
                </form>
            </div>
        </div>
    );
}

export default Applyloan;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Applyloan.css";

// const Applyloan = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false); // ✅ fix 2: was []
//   const [loans, setLoans] = useState([]); // ✅ fix 2: was ""
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     amount: "",   
//     tenure: "",
//     purpose: "", // ✅ fix 5: was "pupose"
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   useEffect(() => {
//     fetchApplyInfo();
//   }, []);

//   const fetchApplyInfo = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const userResponse = await fetch("https://loan-aptech.onrender.com/api/auth/user", {
//         credentials: "include",
//       });
      

//       const loansResponse = await fetch(
//         "https://loan-aptech.onrender.com/api/loans/my-loans",
//         {
//           credentials: "include",
//         },
//       );

//       if (loansResponse.ok) {
//         const loansData = await loansResponse.json();
//         setLoans(loansData.loans);
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }; // ✅ fix 1: handleSubmit moved outside

//   const handleSubmit = async (e) => {
//     // ✅ fix 1: now its own function
//     e.preventDefault();
//     setError("");

//     if (
//       // ✅ fix 7: validation BEFORE navigate
//       !formData.name ||
//       !formData.email ||
//       !formData.amount ||
//       !formData.purpose || // ✅ fix 5: was "pupose"
//       !formData.tenure
//     ) {
//       setError("Please enter all fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("https://loan-aptech.onrender.com/api/loans/apply", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // ✅ fix 4: was "Application/json"
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           email: formData.email,
//           name: formData.name,
//           amount: formData.amount,
//           duration: formData.tenure,
//           purpose: formData.purpose, // ✅ fix 5: was "pupose"
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Loan application failed");
//       }

//       alert("Application Successful");
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="apply-container">
//       <div className="apply-card">
//         <div className="apply-title">
//           <form className="apply-form" onSubmit={handleSubmit}>
//             <div className="input-group">
//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <div className="apply-title">Apply For A Loan</div>
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 name="name" // ✅ fix 6: connected to state
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Your Name"
//                 style={{ color: "black" }}
//               />

//               <label>Email Address</label>
//               <input
//                 type="email"
//                 name="email" // ✅ fix 6: connected to state
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="user@domain.com"
//               />

//               <label>Loan Amount($)</label>
//               <input
//                 type="number"
//                 name="amount" // ✅ fix 6: connected to state
//                 value={formData.amount}
//                 onChange={handleChange}
//                 placeholder="5000"
//               />

//               <label>Loan Tenure (months)</label>
//               <input
//                 type="number"
//                 name="tenure" // ✅ fix 6: connected to state
//                 value={formData.tenure}
//                 onChange={handleChange}
//                 placeholder="e.g 12, 24,36"
//               />

//               <label>Purpose Of Loan</label>
//               <textarea
//                 name="purpose" // ✅ fix 6: connected to state
//                 value={formData.purpose}
//                 onChange={handleChange}
//                 placeholder="e.g Home renovation, Business Expansion, Education..."
//               />

//               <button className="apply-submit-btn" disabled={loading}>
//                 {loading ? "Submitting..." : "Submit Application"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Applyloan;