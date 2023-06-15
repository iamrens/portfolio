import { useContext } from "react"
import { ThemeContext } from '../context/ThemeContext'
import { personalInfo } from "../data";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Var } from "../utils/framer";

const Personal = () => {
  const { groupHover } = useContext(ThemeContext);
  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  return (
    <div className=''>  
      
      <motion.div
        variants={Var.parent(0.5, 'easeInOut', 0.1)}
        initial="initial"
        animate="animate" 
        // className={`grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 text-textLight font-open p-2 max-w-[700px] mx-auto border border-black dark:border-white mt-2 ${isMobile ? 'w-[95%]' : 'w-[80%]'}`}
        className={`grid grid-cols-1 gap-1 sm:gap-2 text-textLight font-open p-2 max-w-[400px] mx-auto border border-black dark:border-white mt-2`}
      >
        {personalInfo.map(({title, description}, index) => (
          <motion.h3
            variants={Var.scale(0.5, 'easeInOut', 0.5)}
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