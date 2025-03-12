import React from "react";

const ProjectCard = ({ title, stack, description, link }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-stack">{stack}</p>
      <p className="project-description">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Ver mais
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
