import Personal from "../components/Personal"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Skill from "../components/Skill"
import { motion } from "framer-motion"
import { skillDetails } from "../data"
import ExpCard from "../components/ExpCard"


const About = () => {
  const { textColor, hoverTextColor} = useContext(ThemeContext);
  const personal = Array.from("Personal Info")

  const divVar = {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      }
    }
  }

  const skillVar = {
    initial: { opacity: 0, x: -30},
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }
  
  const titleVar = {
    initial: { opacity: 0, y: -30},
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }
  const subtitleVar = {
    initial: { opacity: 0, y: 30},
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='h-[100%] snap-y snap-mandatory mx-auto box-border px-2 scroll-smooth'>
      
      {/* Personal Info */}
      <div id="personal" className="h-screen pt-10 relative">
        <motion.h1
          variants={titleVar}
          initial="initial"
          animate="animate"
          className="text-center text-[40px] font-poppins font-bold text-titleLight dark:text-titleDark"
        >
          About {""}
          <span className={`${textColor}`}>Me</span>
        </motion.h1>

        <motion.h2
          variants={subtitleVar}
          initial="initial"
          animate="animate"
          className="text-titleLight dark:text-titleDark font-poppins font-bold text-[24px] sm:text-[28px] text-center pb-2 border-b border-gray-300 dark:border-neutral-800 pt-7"
        >
          <span className={`cursor-pointer ${hoverTextColor} transition duration-300`}>
            {personal.map((letter, index) => (
              <span key={index} className={`dark:hover:text-white hover:text-black hover:scale-[1.2] transition duration-300 ease-out tracking-widest inline-block ${letter === " " ? 'whitespace-pre' : null}`}>
                {letter}
              </span>
            ))}
          </span>
        </motion.h2>

        <Personal />
        
      </div>

      {/* Skills */}
      <div id="skills" className="flex flex-col items-center h-screen pt-10 relative">
        <motion.h2
          variants={titleVar}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          className="text-titleLight dark:text-titleDark text-center font-poppins font-bold text-[24px] sm:text-[28px] pb-2 border-b border-gray-300 dark:border-neutral-800 w-[100%]"
        >
          Skills
        </motion.h2>

        <motion.h3 
          variants={subtitleVar}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          className="text-textLight text-[16px] sm:text-[18px] font-poppins text-center pt-2"
        >
          Hover or tap over a skill for current proficiency
        </motion.h3>

        <motion.div
          variants={divVar}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          className="grid grid-cols-4 gap-5 pt-7"
        >
          {skillDetails.map(({ title, url, level }, index) => (
            <motion.div
              key={index}
              variants={skillVar}
              className="pt-3"
            >
              <Skill title={title} url={url} level={level} />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Education & Experience */}
      <div id="education" className="h-auto mt-[50px] w-auto overflow-hidden">
        <motion.h2 
          variants={titleVar}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          className="text-titleLight dark:text-titleDark text-center font-poppins font-bold text-[24px] sm:text-[28px] pb-2 border-b border-gray-300 dark:border-neutral-800 pt-10"
        >
          Education & Experiences
        </motion.h2>
        
        <ExpCard />
        
      </div>
      

    </div>
  )
}

export default About