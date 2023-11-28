// src/Dashboard.jsx
import React, { useState } from 'react';
import MyLogoutButton from './LogoutButton';
import ProjectForm from './ProjectForm';

function Dashboard() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    // You may want to save the projects to a backend server or database
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Your Dashboard</h1>
        {/* Display existing projects */}
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.projectName}</strong>: {project.description}
            </li>
          ))}
        </ul>
        {/* Add ProjectForm with spacing */}
        <div style={{ marginBottom: '20px' }}>
          <ProjectForm onAddProject={handleAddProject} />
        </div>
        <MyLogoutButton className="btn btn-sm" />
      </div>

      {/* Additional content related to the dashboard */}
      {/* ... (additional content) ... */}
    </div>
  );
}

export default Dashboard;
