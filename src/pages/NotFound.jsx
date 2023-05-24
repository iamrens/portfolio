import { NavLink } from "react-router-dom"
import Clicker from "../components/Clicker";
import { HiHome } from "react-icons/hi2";

const NotFound = () => {
  return (
    <div className='bg-light dark:bg-dark h-screen flex flex-col items-center justify-center gap-5 font-poppins text-titleLight dark:text-titleDark text-center'>
        <h1 className="text-[64px] font-bold">404</h1>
        <h1 className="text-[24px] font-semibold">Page could not be found.</h1>
        <NavLink to="/">
            <div className="animate-bounce">
                <Clicker icon={<HiHome size={24} />} title={'Homepage'} />
            </div>
            
        </NavLink>
    </div>
  )
}

export default NotFound