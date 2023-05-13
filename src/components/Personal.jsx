import { useContext } from "react"
import { ThemeContext } from '../context/ThemeContext'
import { personalInfo } from "../data";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Personal = () => {
  const { groupHover } = useContext(ThemeContext);
  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  const divVar = {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.1,
      }
    }
  }

  return (
    <div className=''>  
      
      <motion.div
        variants={divVar}
        initial="initial"
        animate="animate" 
        className={`grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 text-textLight font-open p-2 max-w-[700px] mx-auto border border-black dark:border-white mt-2 ${isMobile ? 'w-[95%]' : 'w-[80%]'}`}
      >
        {personalInfo.map(({title, description}, index) => (
          <motion.h3
            key={index} 
            className="font-poppins text-[16px] md:text-[18px] cursor-pointer rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-neutral-800 group"
          >
            {title}
            <motion.span
              className={`text-neutral-800 dark:text-titleDark group-hover:font-bold ${groupHover}`}
            >
              {description}
            </motion.span>
          </motion.h3>
        ))}
      </motion.div>

    </div>
  )
}

export default Personal