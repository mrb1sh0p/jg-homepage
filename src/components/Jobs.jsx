import React from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const jobsList = [
    {
      title: "Portifolio Page",
      stack: "ReactJs",
      description: "Meu site pessoal ",
      link: "https://github.com/mrb1sh0p/jg-homepage",
    },
    {
      title: "API Email Mass",
      stack: "Typescript, NodeJs e Firabase",
      description: "Uma api para envio de email em massa, focando em email marketing",
      link: "https://github.com/mrb1sh0p/email-mass-api",
    },
      {
      title: "API Email Mass",
      stack: "ReactJs, Firabase",
      description: "Um editor rich text online completo",
      link: "https://richlyapp.vercel.app/",
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
