// frontend/src/components/UpdateUser.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the user details for the given ID
        fetch(`/api/users/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            return response.json(); // Return the JSON from response
        })
        .then(data => {
            console.log(data);
            setName(data.name); // Set the user's name in state
            setEmail(data.email); // Set the user's email in state
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, [id]); // Add id as dependency

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { name, email };

        // Send PUT request to update the user details
        fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser), // Send the updated user data as JSON
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user');
                }
                return response.json(); // Return the updated user as JSON
            })
            .then(data => {
                console.log('User updated:', data);
                navigate('/users'); // Navigate back to user list after successful update
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name} // Bind the input value to state
                        onChange={(e) => setName(e.target.value)} // Update state on input change
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email} // Bind the input value to state
                        onChange={(e) => setEmail(e.target.value)} // Update state on input change
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
