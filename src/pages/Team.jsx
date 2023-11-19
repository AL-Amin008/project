// src/pages/Team.jsx
import React, { useState, useEffect } from 'react';

const Team = () => {
  // State for storing team member data
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/database/teamMembers.json');
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members data:', error);
      }
    };

    // Fetch data for team members
    fetchTeamMembers();
  }, []);

  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
