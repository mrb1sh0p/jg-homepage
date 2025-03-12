import React from "react";

const JobCard = ({ title, stack, description, link }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{title}</h3>
      <p className="job-stack">{stack}</p>
      <p className="job-description">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="job-link">
          Ver mais
        </a>
      )}
    </div>
  );
};

export default JobCard;
