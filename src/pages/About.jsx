import Personal from "../components/Personal"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Skill from "../components/Skill"
import { motion, AnimatePresence } from "framer-motion"
import { skillDetails } from "../data"
import ExpCard from "../components/ExpCard"

const About = () => {
  const { textColor } = useContext(ThemeContext);

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

  return (
    <div className='h-[100%] snap-y snap-mandatory mx-auto box-border px-2'>
      
      {/* Personal Info */}
      <div className="h-screen pt-10">
        <h1 className="text-center text-[40px] font-poppins font-bold text-titleLight dark:text-titleDark">
          About {""}
          <span className={`${textColor}`}>Me</span>
        </h1>

        <h2 className="text-titleLight dark:text-titleDark font-poppins font-bold text-[24px] text-center pb-2 border-b border-gray-300 dark:border-neutral-800 pt-5">
          Personal Info
        </h2>

        <Personal />
      </div>

      {/* Skills */}
      <div className="flex flex-col items-center h-screen">
        <h2 className="text-titleLight dark:text-titleDark text-center font-poppins font-bold text-[24px] pb-2 border-b border-gray-300 dark:border-neutral-800 pt-10 w-[100%]">
          Skills
        </h2>

        <h3 className="text-textLight font-poppins text-center pt-2">
          Hover over a skill for current proficiency
        </h3>

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
      <div className="h-auto">
        <h2 className="text-titleLight dark:text-titleDark text-center font-poppins font-bold text-[24px] pb-2 border-b border-gray-300 dark:border-neutral-800 pt-10">
          Education & Experiences
        </h2>
        
        <ExpCard />
        
      </div>
      

    </div>
  )
}

export default About