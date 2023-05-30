import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { myProjects } from "../data";
import { Link } from "react-router-dom";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb"
import { Var } from "../utils/framer";

const Projects = () => {
  const { textColor, hoverTextColor, bgColor } = useContext(ThemeContext);

  return (
    <div className="h-screen overflow-y-auto box-border px-2 mx-auto pt-10 pb-[80px]">
      <motion.h1
        variants={Var.titles(0.5, 'easeInOut', -30)}
        initial="initial"
        animate="animate"
        className="text-center text-[40px] font-poppins font-bold text-titleLight dark:text-titleDark "
      >
        My {""}
        <span className={`${textColor}`}>Projects</span>
      </motion.h1>

      <motion.p
        variants={Var.titles(0.5, 'easeInOut', 30)}
        initial="initial"
        animate="animate" 
        className="text-textLight dark:text-textDark pt-5 text-[16px] sm:text-[18px] font-poppins text-justify sm:text-left w-[95%] sm:w-[85%] mx-auto"
      >
        These projects present real-world examples of my work, highlighting my skills, experience, and ability to effectively manage projects with different technologies. Each project includes brief descriptions, code repositories, and live demos. 
        <span className="font-semibold">
          {""} Note: My projects ( Social Media App and Fitness List) runs the server on a free web service on render, so if you visit the site, it might take a few minutes to login or register.
        </span>
      </motion.p>

      <motion.div
        variants={Var.parent(0.5, 'easeInOut', 0.5)}
        initial="initial"
        animate="animate"
        className="mt-[50px] flex flex-wrap gap-7 mx-auto justify-center w-[95%]"
      >
        {myProjects.map((project, index) => (
          <motion.div 
            key={index}
            variants={Var.child(0.8, 'easeInOut', -100)}
          >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className={`w-auto max-w-[360px] sm:w-[360px] cursor-pointer p-3 rounded-2xl  ${bgColor} flex flex-col`}
          >
            <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
              <img 
                src={project.img}
                alt={project.imgName}
                className="w-full h-full object-cover rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
              />
              <div className="absolute right-0 top-0 flex flex-col space-y-1 justify-end p-2">
                <Link to={project.github} target="_blank">
                  <FaGithub className={`w-10 h-10 p-1 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-white dark:hover:bg-white text-titleLight dark:text-titleDark ${hoverTextColor}`} />
                </Link>
                <Link to={project.link} target="_blank">
                  <TbWorld className={`w-10 h-10 p-1 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-white dark:hover:bg-white text-titleLight dark:text-titleDark ${hoverTextColor}`} />
                </Link>
                <Link to={project.youtube} target="_blank">
                  <FaYoutube className={`w-10 h-10 p-1 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-white dark:hover:bg-white text-titleLight dark:text-titleDark ${hoverTextColor}`} />
                </Link>
              </div>
            </div>

            <div className="mt-5 bg-gray-300 dark:bg-neutral-700 p-3 flex-grow rounded-2xl">
              <h2 className="font-poppins font-bold text-titleLight dark:text-titleDark text-[24px]">{project.title}</h2>
              <p className="text-neutral-600 dark:text-textDark text-[14px] font-open mt-2 text-justify">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2"> 
                {project.tags.map((tag, index) => (
                  <p key={index} className={`font-open text-[16px] font-semibold ${tag.color}`}>
                    #{tag.title}
                  </p>
                ))}
              </div>
            </div>
          </Tilt>
          </motion.div>
        ))}
        
      </motion.div>
    </div>
  );
};

export default Projects;
