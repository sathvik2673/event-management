import React from 'react';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';

const teamMembers = [
  { name: 'sathvik', role: 'Event Planner', image: team1 },
  { name: 'sathvik', role: 'Photographer', image: team2 },
  { name: 'sathvik', role: 'Coordinator', image: team3 },
  { name: 'sathvik', role: 'Decorator', image: team4 },
];

const Team = () => (
  <div className="team">
    <h2>Meet Our Team</h2>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.image} alt={member.name} />
          <h4>{member.name}</h4>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
