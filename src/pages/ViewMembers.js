import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members');
        setMembers(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching members:', error);
        setError('Failed to load members. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div className="loading">Loading members...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="view-members">
      <h2>Team Members</h2>
      {members.length === 0 ? (
        <p>No members found. Add some team members!</p>
      ) : (
        <div className="members-list">
          {members.map(member => (
            <div key={member._id} className="member-card">
              {member.image && (
                <img 
                  src={`http://localhost:5000/uploads/${member.image}`} 
                  alt={member.name}
                />
              )}
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewMembers;