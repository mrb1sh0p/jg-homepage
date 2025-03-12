import React from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const jobsList = [
    {
      title: "Portifolio Page",
      stack: "Html, Css, JavaScript",
      description: "Desenvolvimento de interfaces modernas e responsivas.",
      link: "https://github.com/mrb1sh0p/jg-homepage",
    },
  ];

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Trabalhos</h1>
      <div className="jobs-list">
        {jobsList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
