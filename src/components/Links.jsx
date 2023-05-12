import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFacebookF, FaLinkedin, FaArrowDown, FaInstagram } from "react-icons/fa";

const Links = () => {
    const { bgColor } = useContext(ThemeContext);
    const [item, setItem] = useState(false);

    const resumeVar = {
        initial: { x: -50 },
        animate: { 
            x: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    }

    const iconsVar = {
        initial: { x: 50 },
        animate: { 
            x: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    }

    return (
        <div className="pt-7 sm:pt-[40px] flex flex-row justify-between items-center">

            <motion.div
                variants={resumeVar}
                initial="initial"
                animate="animate"
                onMouseEnter={() => setItem(true)}
                onMouseLeave={() => setItem(false)}
                className={`flex items-center justify-center rounded-full cursor-pointer border border-titleLight text-textLight dark:text-textDark hover:text-white dark:hover:text-white max-w-[136px] relative overflow-hidden`}
            >
                <h1 className="font-open font-bold py-2 px-4 z-10">Resume</h1>

                <div className={`${bgColor} rounded-full p-2 text-white z-10`}>
                <FaArrowDown size={24} className="" />
                </div>

                <AnimatePresence>
                {item && (
                    <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    exit={{ x: 100 }}
                    className={`absolute rounded-full h-[40px] w-[136px] ${bgColor}`}
                    ></motion.div>
                )}
                </AnimatePresence>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                variants={iconsVar}
                initial="initial"
                animate="animate"
                className="xs:pl-2 sm:pl-5 flex flex-row items-center justify-center text-titleLight dark:text-titleDark space-x-1 md:space-x-2"
            >
                <Link to={import.meta.env.VITE_GITHUB} target="_blank">
                    <FaGithub size={35} className="home-icon" />
                </Link>
                <Link to={import.meta.env.VITE_FB} target="_blank">
                    <FaFacebookF size={35} className="home-icon" />
                </Link>
                <Link to={import.meta.env.VITE_LINKEDIN} target="_blank">
                    <FaLinkedin size={35} className="home-icon" />
                </Link>
                <Link to={import.meta.env.VITE_IG} target="_blank">
                    <FaInstagram size={35} className="home-icon" />
                </Link>
            </motion.div>

        </div>

    );
};

export default Links;
