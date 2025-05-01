import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the BLUE Team Management</h2>
      <div className="actions">
        <Link to="/add" className="btn">Add Member</Link>
        <Link to="/view" className="btn">View Members</Link>
      </div>
    </div>
  );
}

export default Home;