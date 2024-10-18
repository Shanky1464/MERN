// src/components/About.js
import React, { useEffect, useState } from 'react';

function About() {
  const [message, setMessage] = useState('Loading...');

  // Fetch data from backend for the About page
  useEffect(() => {
    fetch('/api/about')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMessage('Error fetching data from backend');
      });
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default About;
