import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Var } from "../utils/framer";

const Clicker = ({icon, title}) => {
    const { bgColor } = useContext(ThemeContext);
    const [item, setItem] = useState(false);

  return (
    <div>
      <motion.div
        variants={Var.child(0.5, 'easeInOut', -50)}
        initial="initial"
        animate="animate"
        onMouseEnter={() => setItem(true)}
        onMouseLeave={() => setItem(false)}
        className={`flex items-center justify-between rounded-full cursor-pointer border border-titleLight text-textLight dark:text-textDark hover:text-white dark:hover:text-white max-w-full relative overflow-hidden`}
      >
        <h1 className="font-open font-bold py-2 pl-7 pr-5 items-center z-10">
          {title}
        </h1>

        <div className={`${bgColor} rounded-full p-2 text-white z-10`}>
          {icon}
        </div>

        <AnimatePresence>
          {item && (
            <motion.div
              variants={Var.child(0.2, 'easeOut', 100)}
              exit={{ x: 200 }}
              className={`absolute rounded-full h-full w-full ${bgColor}`}
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Clicker;
