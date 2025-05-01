import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching member:', error);
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!member) return <div>Member not found</div>;

  return (
    <div className="member-details">
      <h2>Member Details</h2>
      <div className="details-card">
        {member.image && (
          <img 
            src={`http://localhost:5000/uploads/${member.image}`} 
            alt={member.name} 
          />
        )}
        <h3>{member.name}</h3>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
        <Link to="/view" className="btn">Back to Members List</Link>
      </div>
    </div>
  );
}

export default MemberDetails;