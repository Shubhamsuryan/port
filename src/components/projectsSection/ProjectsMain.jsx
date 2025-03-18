import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Foodhub",
    year: "Dec2024",
    align: "right",
    image: "../../public/images/foodhub.png",
    link: "https://shubhamsuryan.github.io/miniproject/#restart",
  },
  {
    name: "Lusso Real Estate",
    year: "Nov2024",
    align: "left",
    image: "../../public/images/lusso.jpg",
    link: "https://shubhamsuryan.github.io/pro1/",
  },
  {
    name: "TourIndia",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/tourindia.png",
    link: "https://shubhamsuryan.github.io/tourindia/",
  },
  {
    name: "UsabilityHub",
    year: "May2024",
    align: "left",
    image: "../../public/images/hub.png",
    link: "https://shubhamsuryan.github.io/project_2/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
