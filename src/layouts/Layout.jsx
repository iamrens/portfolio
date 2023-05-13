import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { HiUser, HiFolderOpen, HiHome, HiEnvelope } from 'react-icons/hi2'
import { motion, AnimatePresence } from 'framer-motion';
import Theme from './Theme';
import { useMediaQuery } from 'react-responsive';
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const Layout = () => {
    const location = useLocation();
    const { bgColor, hoverBgColor } = useContext(ThemeContext);
    const [ home, setHome ] = useState(false);
    const [ about, setAbout ] = useState(false);
    const [ projects, setProjects ] = useState(false);
    const [ contact, setContact ] = useState(false);
    const isMobile = useMediaQuery({query: '(max-width: 650px)'})
    const isNonMobile = useMediaQuery({query: '(min-width: 650px)'})

    const parentVar = {
        initial: { opacity: 0},
        animate: { 
            opacity: 1, 
            transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.1 }
        }
    }

    const childVar = {
        initial: { opacity: 0, y: -50},
        animate: { 
            opacity: 1,
            y: 0, 
            transition: {duration: 0.8, ease: 'easeInOut', type: 'spring', stiffness: 50}
        }
    }

    const h1Var = {
        initial: { opacity: 0, x: 40 },
        animate: {
            opacity: 1,
            x: 35, 
            transition: {
                duration: 0.4, 
                ease: 'easeInOut'
            }
        }
    }

    return (
        <div>
            <div>
                <motion.div 
                    variants={parentVar}
                    initial="initial"
                    animate="animate"
                    className={`${isMobile ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-xl z-50' : 'fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 bg-gray-200 dark:bg-neutral-800 p-2 rounded-xl z-50'}`}
                >   
                    <NavLink to="/" onClick={() => console.log("navigate to home")}>
                        <motion.div
                            variants={childVar}
                            onMouseEnter={() => setHome("home")}
                            onMouseLeave={() => setHome(false)}
                            className='nav-div'
                        >  
                            <AnimatePresence>
                            {home && isNonMobile ? (
                                <motion.h1
                                    variants={h1Var}
                                    exit={{ opacity: 0, x: 40 }}
                                    className={`${isMobile ? 'absolute left-[58px] bottom-[50px] font-bold py-2 px-4 rounded-full text-white font-poppins' : 'nav-h1'} ${bgColor}`}
                                >
                                    Home
                                </motion.h1>
                            ) : null }
                            </AnimatePresence>
                            <div className={`p-2 rounded-full z-10 ${location.pathname === "/" ? `${bgColor} text-white` : "nav-icon"} hover:text-white ${hoverBgColor}`}>
                                <HiHome className='h-6 w-6'/>
                            </div>
                        </motion.div>
                    </NavLink>

                    <NavLink to="/about" onClick={() => console.log("navigate to about")}>
                        <motion.div 
                            variants={childVar}
                            onMouseEnter={() => setAbout("about")}
                            onMouseLeave={() => setAbout(false)}
                            className='nav-div'
                        >   
                            <AnimatePresence>
                            {about && isNonMobile ? (
                                <motion.h1
                                    variants={h1Var}
                                    exit={{ opacity: 0, x: 40}}
                                    className={`nav-h1 ${bgColor}`}
                                >
                                    About
                                </motion.h1>
                            ) : null}
                            </AnimatePresence>
                            <div className={`p-2 rounded-full z-10 ${location.pathname === "/about" ? `${bgColor} text-white` : "nav-icon"} hover:text-white ${hoverBgColor}`}>
                                <HiUser className='w-6 h-6'/>
                            </div>
                        </motion.div>
                    </NavLink>

                    <NavLink to="/projects" onClick={() => console.log("navigate to projects")}>
                        <motion.div 
                            variants={childVar}
                            onMouseEnter={() => setProjects("projects")}
                            onMouseLeave={() => setProjects(false)}
                            className='nav-div'
                        >
                            <AnimatePresence>
                            {projects && isNonMobile ? (
                                <motion.h1
                                    variants={h1Var}
                                    exit={{ opacity: 0, x: 40 }}
                                    className={`nav-h1 ${bgColor}`}
                                >
                                    Projects
                                </motion.h1>
                            ) : null}
                            </AnimatePresence>
                            <div className={`p-2 rounded-full z-10 ${location.pathname === "/projects" ? `${bgColor} text-white` : "nav-icon"} hover:text-white ${hoverBgColor}`}>
                                <HiFolderOpen className='h-6 w-6'/>  
                            </div>
                        </motion.div>
                    </NavLink>

                    <NavLink to="/contact" onClick={() => console.log("navigate to contact")}>
                        <motion.div 
                            variants={childVar}
                            onMouseEnter={() => setContact("contact")}
                            onMouseLeave={() => setContact(false)}
                            className='nav-div'
                        >
                            <AnimatePresence>
                            {contact && isNonMobile ? (
                                <motion.h1
                                    variants={h1Var}
                                    exit={{ opacity: 0, x: 40 }}
                                    className={`nav-h1 ${bgColor}`}
                                >
                                    Contact
                                </motion.h1>
                            ) : null}
                            </AnimatePresence>
                            <div className={`p-2 rounded-full z-10 ${location.pathname === "/contact" ? `${bgColor} text-white` : "nav-icon"} hover:text-white ${hoverBgColor}`}>
                                <HiEnvelope className='h-6 w-6'/>
                            </div>
                        </motion.div>
                    </NavLink>   
                </motion.div>

                <Theme />



            </div>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout