// src/components/Success.js
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Form Submitted Successfully!</h1>
            <p>Thank you for submitting the form.</p>
            <div>
                <Link to="/new" style={{ marginRight: '20px', textDecoration: 'none', color: 'blue' }}>
                    Add New User
                </Link>
                <Link to="/users" style={{ textDecoration: 'none', color: 'blue' }}>
                    Display All Users
                </Link>
            </div>
        </div>
    );
};

export default Success;
