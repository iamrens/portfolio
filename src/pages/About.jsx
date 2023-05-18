import Personal from "../components/Personal";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
import { skillDetails } from "../data";
import ExpCard from "../components/ExpCard";
import { Link, Element } from "react-scroll";
import { FaArrowDown, FaArrowUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Var } from "../utils/framer";

const About = () => {
  const { textColor, hoverTextColor, hoverBgColor } = useContext(ThemeContext);
  const personal = Array.from("Personal Info");
  const isMobile = useMediaQuery({query: '(max-width: 650px)'})
  const [ currentSection, setCurrentSection ] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['personal', 'skills', 'education'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementsByName(section)[0];
        const rect = element.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial current section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[100%] mx-auto box-border px-2">
      
      {/* Personal Info */}
      <Element name="personal">
      <div className="h-screen pt-10 relative">
        <motion.h1
          variants={Var.titles(0.5, 'easeInOut', -30)}
          initial="initial"
          animate="animate"
          className="text-center text-[40px] font-poppins font-bold text-titleLight dark:text-titleDark"
        >
          About {""}
          <span className={`${textColor}`}>Me</span>
        </motion.h1>

        <motion.h2
          variants={Var.titles(0.5, 'easeInOut', 30)}
          initial="initial"
          animate="animate"
          className="text-titleLight dark:text-titleDark font-poppins font-bold text-[24px] sm:text-[28px] text-center pb-2 border-b border-gray-300 dark:border-neutral-800 pt-7"
        >
          <span
            className={`cursor-pointer ${hoverTextColor} transition duration-300`}
          >
            {personal.map((letter, index) => (
              <span
                key={index}
                className={`dark:hover:text-white hover:text-black hover:scale-[1.2] transition duration-300 ease-out tracking-widest inline-block ${
                  letter === " " ? "whitespace-pre" : null
                }`}
              >
                {letter}
              </span>
            ))}
          </span>
        </motion.h2>

        <Personal />

      </div>
      </Element>

      {/* Skills */}
      <Element name="skills">
      <div className="flex flex-col items-center h-screen pt-10 relative">
        <motion.h2
          variants={Var.titles(0.5, 'easeInOut', -30)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-titleLight dark:text-titleDark text-center font-poppins font-bold text-[24px] sm:text-[28px] pb-2 border-b border-gray-300 dark:border-neutral-800 w-[100%]"
        >
          Skills
        </motion.h2>

        <motion.h3
          variants={Var.titles(0.5, 'easeInOut', 30)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-textLight text-[16px] sm:text-[18px] font-poppins text-center pt-2"
        >
          Hover or tap over a skill for current proficiency
        </motion.h3>

        <motion.div
          variants={Var.parent(0.5, 'easeInOut', 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-5 pt-7"
        >
          {skillDetails.map(({ title, url, level }, index) => (
            <motion.div 
              key={index} 
              variants={Var.child(0.5, 'easeInOut', -30)} 
              className="pt-3"
            >
              <Skill title={title} url={url} level={level} />
            </motion.div>
          ))}
        </motion.div>

      </div>
      </Element>

      {/* Education & Experience */}
      <Element name="education">
      <div className="h-auto mt-[50px] w-auto relative overflow-hidden">
        <motion.h2
          variants={Var.titles(0.5, 'easeInOut', -30)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-titleLight dark:text-titleDark text-center font-poppins font-bold text-[24px] sm:text-[28px] pb-2 border-b border-gray-300 dark:border-neutral-800 pt-10"
        >
          Education & Experiences
        </motion.h2>

        <ExpCard />

      </div>
      </Element>

      {/* Navigation */}
      <div>
        {currentSection === 'personal' && (
          <div className={isMobile ? `about-nav right-1 fixed bottom-1 ${hoverBgColor}` : `about-nav left-1/2 transform -translate-x-1/2 fixed bottom-1 ${hoverBgColor}`}>
            <Link to="skills" smooth={true} duration={500} spy={true}>
              { isMobile ? <FaArrowRight size={24} /> : <FaArrowDown size={24} />}
            </Link>
          </div>
        )}
        {currentSection === 'skills' && (
          <div className={isMobile ? '' : `fixed bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2`}>
            <div className={isMobile ? `${hoverBgColor} fixed bottom-1 left-1 about-nav` : `about-nav ${hoverBgColor}`}>
              <Link to="personal" smooth={true} duration={500} spy={true}>
                { isMobile ? <FaArrowLeft size={24} /> : <FaArrowUp size={24} />}
              </Link>
            </div>
            <div style={{animationDelay: '0.5s'}} className={isMobile ? `${hoverBgColor} fixed bottom-1 right-1 about-nav` : `about-nav ${hoverBgColor}`}>
              <Link to="education" smooth={true} duration={500} spy={true}>
              { isMobile ? <FaArrowRight size={24} /> : <FaArrowDown size={24} />}
              </Link>
            </div>
          </div>
        )}
        {currentSection === 'education' && (
          <div className={isMobile ? `about-nav left-1 fixed bottom-1 ${hoverBgColor}` : `about-nav fixed bottom-1 left-1/2 transform -translate-x-1/2 ${hoverBgColor}`}>
            <Link to="skills" smooth={true} duration={500} spy={true}>
              { isMobile ? <FaArrowLeft size={24} /> : <FaArrowUp size={24} />}
            </Link>
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default About;
