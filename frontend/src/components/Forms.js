import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./css/Forms.css"
const Forms = () => 
{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const navigate = useNavigate();
    const handler = (e)=>{
        e.preventDefault();
        const formData = { name, email };
    
        fetch('/form/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate("/success");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  
    return (
        <div className="form-container">
            <h2>User Registration</h2>
            <form onSubmit={handler}>
                <label>Enter Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Enter Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Forms
// frontend/src/components/Forms.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Container } from 'react-bootstrap';

// const Forms = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const navigate = useNavigate();

//     const handler = (e) => {
//         e.preventDefault();
//         const formData = { name, email };

//         fetch('/form/create', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             navigate("/success");
//             setName('');
//             setEmail('');
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <Container className="mt-5">
//             <h2 className="text-center">User Registration</h2>
//             <Form onSubmit={handler} className="border p-4 rounded shadow">
//                 <Form.Group controlId="formName">
//                     <Form.Label>Enter Name:</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         value={name} 
//                         onChange={(e) => setName(e.target.value)} 
//                         required 
//                         placeholder="Enter your name" 
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formEmail">
//                     <Form.Label>Enter Email:</Form.Label>
//                     <Form.Control 
//                         type="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                         placeholder="Enter your email" 
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">
//                     Submit
//                 </Button>
//             </Form>
//         </Container>
//     );
// };

// export default Forms;
