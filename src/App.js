import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

function App() {
  return (
    <div className="app">
      <nav>
        <h1>TEAM BLUE</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Member</Link>
          <Link to="/view">View Members</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/view" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </div>
  );
}

export default App;