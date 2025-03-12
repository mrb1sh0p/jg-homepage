import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("sidebar");

  const projectList = [
    {
      title: "Portifolio Page",
      stack: "ReactJs",
      description: "Meu site pessoal ",
      link: "https://github.com/mrb1sh0p/jg-homepage",
    },
    {
      title: "API Email Mass",
      stack: "Typescript, NodeJs e Firabase",
      description:
        "Uma api para envio de email em massa, focando em email marketing",
      link: "https://github.com/mrb1sh0p/email-mass-api",
    },
    {
      title: "Richly",
      stack: "ReactJs, Firabase",
      description: "Um editor rich text online completo",
      link: "https://richlyapp.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">{t("projects")}</h1>
      <div className="projects-list">
        {projectList.map((job, index) => (
          <ProjectCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
