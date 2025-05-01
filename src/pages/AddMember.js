import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMember() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    image: null
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
      navigate('/view');
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Failed to add member');
    }
  };

  return (
    <div className="add-member">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Role:</label>
          <input 
            type="text" 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input 
            type="file" 
            name="image" 
            onChange={handleChange} 
            accept="image/*"
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;