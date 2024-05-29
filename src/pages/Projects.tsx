import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';
import { Project } from '../types/Project';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <div>
      <h1>Projects Page</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
