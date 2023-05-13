import { AnimatePresence, motion } from "framer-motion"
import { useState, useContext } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from "../context/ThemeContext";

const Skill = ({title, url, level}) => {
    const [ show, setShow ] = useState(false);
    const { themeColor } = useContext(ThemeContext);

    const divVar = {
        initial: { opacity: 0, scaleX: -1 },
        animate: { 
            opacity: 1, 
            scaleX: 1,
            transition: {duration: 0.5, ease: 'easeOut'}
        }
    }

    const h3Var = {
        initial: { opacity: 0, scale: 0.5, x: '-50%', y: 20 },
        animate: { 
            opacity: 1, 
            scale: 1, 
            x: '-50%', 
            y: 0,
            transition: {duration: 0.3, ease: 'easeOut'}
        }
    }


  return (
    <div 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onTouchStart={() => setShow(!show)}
        className="group relative flex flex-col cursor-pointer h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
    >
        <motion.img
            src={url}
            animate={{ scaleX: show ? -1 : 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-full border border-gray-500 object-cover h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24"    
        />
        
        <AnimatePresence>
        {show &&
        <>
            <motion.h3 
                variants={h3Var}
                initial="initial"
                animate="animate"
                exit={{opacity: 0, scale: 0, x: '-50%', y: 20}}
                className="font-open font-bold absolute -top-7 left-1/2 transform -translate-x-1/2 text-[14px] sm:text-[16px]"
            >
                {title}
            </motion.h3>
            <motion.div
                variants={divVar}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                className="absolute h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full z-10"
            >
                <div className="flex items-center justify-center h-full w-full">
                    <CircularProgressbar 
                        value={level} 
                        text={`${level}%`}
                        strokeWidth={10}
                        background='white'
                        className="font-bold"
                        styles={buildStyles({
                            textSize: '28px',
                            textColor: 'black',
                            pathColor: themeColor,
                            trailColor: 'gray'
                        })}
                    />
                </div>
            </motion.div>
        </>
        }
        </AnimatePresence>

        {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-open font-bold opacity-100 text-black">90%</p>
            </div>
        </div> */}

    </div>
  )
}

export default Skill