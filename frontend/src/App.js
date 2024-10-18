// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import MyNavbar from './components/MyNavbar';
import OwnNavbar from './components/OwnNavbar';
import Forms from './components/Forms';
import Success from './components/Sucess';
import Displayusers from "./components/Displayusers"
import Update from "./components/Update"
function App() {
  return (
    <Router>
      <OwnNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<Forms />} />
        <Route path="/success" element={<Success />} />
        <Route path="/users" element={<Displayusers />}/>
        <Route path="/update/:id" element={<Update />} /> {/* New route for updating users */}
      </Routes>
    </Router>
  );
}

export default App;
