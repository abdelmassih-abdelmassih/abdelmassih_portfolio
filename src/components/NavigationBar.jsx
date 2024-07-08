import { FaBars, FaMobile, FaTimes } from "react-icons/fa"
import { useState } from "react"
import { FaLinkedin } from "react-icons/fa6";
import CustomAlert from "../utils/CustomAlert"
import { Link } from "react-scroll";


export default function NavigationBar() {

  const [showNavigation, setShowNavigation] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    setShowAlert(true);
  }

  const handleClick = () => {
    setShowNavigation(showNavigation => !showNavigation);
  }

  return (
    <div className="fixed w-full h-[80] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">

      <CustomAlert position={{ vertical: "top", horizontal: "center" }} text="Mobile Phone Copied!" open={showAlert} setOpen={setShowAlert} />

      <ul className="hidden md:flex border-b-2 border-[#2d71d5]">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!showNavigation ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={showNavigation ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
            <a href="https://www.linkedin.com/in/abdelmassih-abdelmassih" className="flex justify-between items-center w-full text-gray-300">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#17bb25]">
            <p onClick={() => copyToClipboard("+96171659565")} className="flex justify-between items-center w-full text-gray-300">
              Mobile <FaMobile size={30} />
            </p>
          </li>
        </ul>
      </div>

    </div>
  )
}