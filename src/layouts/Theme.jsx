import { ThemeContext } from "../context/ThemeContext"
import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCog } from "react-icons/fa"
import { ImDroplet } from "react-icons/im"
import { HiSun, HiMoon } from "react-icons/hi2"
import { Var } from "../utils/framer"

const Theme = () => {
    const { setThemeColor, theme, setTheme } = useContext(ThemeContext);
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [menu, setMenu] = useState(true);

    return (
        <>
            
            <div className='fixed top-[10%] left-0 z-50 flex flex-col opacity-70 hover:opacity-100 sm:opacity-100'>
                <AnimatePresence>
                {menu &&
                <motion.div
                    onClick={() => {
                        setShowSwitcher(true);
                        setMenu(false);
                    }}
                    variants={Var.child(0.3, 'easeInOut', -20)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.1}}
                    exit={{opacity: 0, x: -20}}
                    className='flex items-center justify-center text-titleLight bg-gray-300 dark:text-titleDark dark:bg-neutral-700 cursor-pointer rounded-lg w-[35px] h-[35px]'
                >
                    <FaCog 
                        size={24} 
                        className='hover:animate-spin-3s'
                    />
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                { showSwitcher &&
                <motion.div 
                    className='absolute w-[210px] bg-slate-200 dark:bg-neutral-700 p-3 rounded-lg top-0'
                    variants={Var.child(0.3, 'easeInOut', -20)}
                    initial="initial"
                    animate="animate"
                    exit={{opacity: 0, x: -20}}
                >

                    <div className='border-b border-gray-500 flex items-center justify-between font-open font-bold text-titleLight dark:text-titleDark p-1'>
                        <h1 className='pr-5'>Theme Switcher</h1>
                        <button
                            onClick={() => {
                                setShowSwitcher(false);
                                setMenu(true);
                            }}
                            className={`rounded-full px-[7.5px] hover:bg-gray-300 dark:hover:bg-neutral-900`}
                        >
                            x
                        </button>
                    </div>

                    <div className='grid grid-cols-4 gap-2 pt-3'>
                    <ImDroplet
                        size={30} 
                        className='text-[#dc2626] hover:text-white bg-gray-300 hover:bg-[#dc2626] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#dc2626')}
                    />
                    <ImDroplet 
                        className='text-[30px] text-[#0000FF] hover:text-white bg-gray-300 hover:bg-[#0000FF] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#0000FF')}
                    />
                    <ImDroplet
                        className='text-[30px] text-[#eab308] hover:text-white bg-gray-300 hover:bg-[#eab308] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#eab308')}
                    />
                    <ImDroplet 
                        className='text-[30px] text-[#22c55e] hover:text-white bg-gray-300 hover:bg-[#22c55e] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#22c55e')} 
                    />
                    <ImDroplet 
                        className='text-[30px] text-[#FC6A03] hover:text-white bg-gray-300 hover:bg-[#FC6A03] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#FC6A03')}
                    />
                    <ImDroplet 
                        className='text-[30px] text-[#6A35C3] hover:text-white bg-gray-300 hover:bg-[#6A35C3] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#6A35C3')}
                    />
                    <ImDroplet 
                        className='text-[30px] text-[#00FF7F] hover:text-white bg-gray-300 hover:bg-[#00FF7F] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#00FF7F')}
                    />
                    <ImDroplet 
                        className='text-[30px] text-[#0ea5e9] hover:text-white bg-gray-300 hover:bg-[#0ea5e9] rounded-full cursor-pointer p-1.5'
                        onClick={() => setThemeColor('#0ea5e9')}
                    />
                    </div> 
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {menu && (
                <motion.div 
                    onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
                    variants={Var.child(0.3, 'easeInOut', -20)}
                    initial="initial"
                    animate="animate"
                    whileHover={{scale: 1.1}}
                    exit={{opacity: 0, x: -20}}
                    className='flex items-center justify-center mt-3 text-titleLight bg-gray-300 dark:text-titleDark dark:bg-neutral-700 cursor-pointer rounded-lg w-[35px] h-[35px]'
                >
                    {theme === 'light' ?
                        <HiMoon size={24} className="hover:animate-bounce"/> 
                    :
                        <HiSun size={28} className="hover:animate-spin-5s"/>
                    }  
                </motion.div>
                )}
                </AnimatePresence>
            </div>

            
        </>
    )
}

export default Theme