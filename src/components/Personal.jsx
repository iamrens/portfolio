import { useContext } from "react"
import { ThemeContext } from '../context/ThemeContext'
import { personalInfo } from "../data";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Personal = () => {
  const { groupHover } = useContext(ThemeContext);

  return (
    <div className=''>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 text-textLight font-open p-2 w-[80%] max-w-[630px] mx-auto border border-black dark:border-white mt-2">
        {personalInfo.map(({title, description}, index) => (
          <h3 key={index} className="font-poppins cursor-pointer rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-neutral-800 group">
            {title}
            <motion.span
              className={`text-neutral-800 dark:text-titleDark group-hover:font-bold ${groupHover}`}
            >
              {description}
            </motion.span>
          </h3>
        ))}
      </div>

    </div>
  )
}

export default Personal