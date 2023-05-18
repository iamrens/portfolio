import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaFacebookF, FaLinkedin, FaArrowDown, FaInstagram } from "react-icons/fa";
import CV from "../assets/CV.pdf"
import Clicker from "./Clicker";
import { Var } from "../utils/framer";

const Links = () => {

    return (
        <div className="pt-7 sm:pt-[40px] flex flex-wrap sm:flex-nowrap gap-2 justify-center items-center">

            <a href={CV} download="Renson-CV">
                <Clicker title={'Resume'} icon={<FaArrowDown size={24} />} />
            </a>

            {/* Social Icons */}
            <motion.div
                variants={Var.child(0.5, 'easeInOut', 50)}
                initial="initial"
                animate="animate"
                className="xs:pl-2 sm:pl-5 flex flex-row items-center justify-center text-titleLight dark:text-titleDark space-x-1 md:space-x-2"
            >
                <Link to={import.meta.env.VITE_GITHUB} target="_blank">
                    <FaGithub size={40} className="home-icon" />
                </Link>
                <Link to={import.meta.env.VITE_FB} target="_blank">
                    <FaFacebookF size={40} className="home-icon" />
                </Link>
                <Link to={import.meta.env.VITE_LINKEDIN} target="_blank">
                    <FaLinkedin size={40} className="home-icon" />
                </Link>
                <Link to={import.meta.env.VITE_IG} target="_blank">
                    <FaInstagram size={40} className="home-icon" />
                </Link>
            </motion.div>

        </div>

    );
};

export default Links;
