import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Songs } from './Songs';
import { About } from './About';
import { CreatePost } from './CreatePost';
import './App.css'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/create-post">Add new song</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;