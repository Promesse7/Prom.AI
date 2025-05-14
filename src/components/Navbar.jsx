import React from 'react';

function Navbar() {
  return (
    <nav className="topbar">
      <div className="top1">
        <h1>Prom</h1>
        <h1 style={{ color: '#58b908' }}>AI</h1>
      </div>
      <div className="top2">
        <h1 style={{ color: '#58b908' }}>
          <a href="home.html" style={{ color: '#58b908' }}>
            Home
          </a>
        </h1>
      </div>
      <div className="top3">
        <a href="./generativeai/index.html">
          <h1>Chat</h1>
        </a>
      </div>
      <div className="top4">
        <a href="#">
          <h1>Pages</h1>
        </a>
      </div>
      <div className="top5">
        <a href="services.html">
          <h1>Service</h1>
        </a>
      </div>
      <div className="top6">
        <a href="sass_init.html">
          <h1>Pricing</h1>
        </a>
      </div>
      <div className="top7">
        <h1>
          <a href="./contact.html">Contact</a>
        </h1>
      </div>
      <div className="top8">
        <button type="button">
          <a href="./login.html">Login Now</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;