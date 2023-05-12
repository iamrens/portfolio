import { Cursor, useTypewriter } from 'react-simple-typewriter'
import profile from '../assets/profile.jpeg'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Links from '../components/Links';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const Home = () => {
  const { bgColor, textColor } = useContext(ThemeContext);
  const isMobile = useMediaQuery({query: '(max-width: 650px)'})

  const [ text ] = useTypewriter({
    words: [
      "<Engineer />",
      "Developer.jsx",
      "Designer.css",
      "<coffee-lover />",
      "<gamer />"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000
  })

  

  return (
      <div className={`grid grid-cols-12 h-screen items-center justify-center overflow-y-scroll sm:overflow-y-auto`}>

        <div className='col-span-12 sm:col-span-5 mx-auto p-3 md:p-5 flex items-center h-auto sm:h-screen'>
          <motion.img
            initial={{borderRadius: '100px', opacity: 0}}
            animate={{borderRadius: '30px', opacity: 1}}
            transition={{duration: 0.5, ease: 'linear'}} 
            src={profile} 
            alt='profile' 
            className='object-cover w-[250px] h-[300px] sm:w-auto sm:h-[100%] rounded-[30px] shadow-img dark:shadow-imgDark z-10'
          />
        </div>

        <div className='col-span-12 sm:col-span-7 h-[100%] flex flex-col sm:w-[80%] mx-[10px] px-2 justify-center items-center sm:items-start z-20 pb-[80px]'>

          <motion.h1
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`font-poppins ${textColor} font-bold xs:text-[26px] sm:text-[30px] md:text-[40px]`}
          >
            Renson Ebanculla
          </motion.h1>
          
          <motion.p
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
            className='font-poppins font-bold text-titleLight dark:text-titleDark xs:text-[24px] sm:text-[26px] md:text-[30px]'
          >
            {!isMobile && '- \u00A0'}
            <span className={`${textColor} font-poppins `}>{text}</span>
            <Cursor cursorColor='red' className='text-[28px]'/>
          </motion.p>

          {isMobile && <Links />}

          <motion.p
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5, ease: 'easeInOut' }}  
            className='font-open text-titleLight dark:text-titleDark pt-5 sm:pt-[50px] leading-7 xs:text-justify sm:text-left'
          >
            I&apos;m a licensed Electronics Engineer and an aspiring full-stack web developer with a passion for creating innovative web applications. My portfolio showcases my expertise in the MERN stack, with projects that demonstrate my ability to turn ideas into functional and engaging products.
          </motion.p>

          {/* Resume and Social Links */}
          {!isMobile && <Links />}

        </div>

        <div className={`${isMobile ? 
          `fixed h-[100%] w-[200%] ${bgColor} top-[-85%] left-[-10%] rotate-[10deg]` : 
          `fixed h-[200%] w-[100%] ${bgColor} top-[-50%] left-[-83%] rotate-[-15deg]`}`
        }></div>

      </div>
    
  )
}

export default Home