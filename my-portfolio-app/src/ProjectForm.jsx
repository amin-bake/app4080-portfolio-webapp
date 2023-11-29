// src/ProjectForm.jsx
import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [project, setProject] = useState({
    projectName: '',
    description: '',
    technologiesUsed: '',
    githubLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({ ...prevProject, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate project details if needed
    onAddProject(project);
    // Optionally, clear the form
    setProject({
      projectName: '',
      description: '',
      technologiesUsed: '',
      githubLink: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          className="form-control"
          id="projectName"
          name="projectName"
          value={project.projectName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={project.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="technologiesUsed">Technologies Used:</label>
        <input
          type="text"
          className="form-control"
          id="technologiesUsed"
          name="technologiesUsed"
          value={project.technologiesUsed}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="githubLink">GitHub Link:</label>
        <input
          type="text"
          className="form-control"
          id="githubLink"
          name="githubLink"
          value={project.githubLink}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
