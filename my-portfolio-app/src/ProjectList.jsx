import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Call the fetchProjects function from the api.js file
    fetchProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        // Handle the error as needed
        console.log("Unsuccessful Project fetch",error);
      });
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {/* Render projects in the component */}
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.projectName}</h3>
          <p>{project.description}</p>
          {/* Add other project details */}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
