// src/components/Home.js
import React, { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/home') // This will be proxied to http://localhost:5000/api/home
      .then((response) => {
        return response.json(); // Parse the JSON from the backend response
      })
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMessage('Error fetching data from backend');
      });
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
