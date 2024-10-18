// frontend/src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // Fetch users when the component loads
    useEffect(() => {
        fetch('/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetching users');
                }
                return response.json();  // Ensure we return response.json()
            })
            .then(data => {
                console.log(data);
                setUsers(data);  // Set users directly from the backend response
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    // Handle delete user
    const handleDelete = (id) => {
        fetch(`/api/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error deleting user');
                }
                setUsers(users.filter(user => user._id !== id)); // Remove the deleted user from the list
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    // Handle update user (redirect to update page)
    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
        console.log(`Update user with ID: ${id}`);
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">User List</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button onClick={() => handleUpdate(user._id)}>Update</Button>
                                    <Button 
                                        onClick={() => handleDelete(user._id)} 
                                        className="ml-2" 
                                        variant="danger">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No users found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className="mt-3">
                <Link to="/new">
                    <Button variant="primary">Add New User</Button>
                </Link>
            </div>
        </Container>
    );
};

export default UserList;
