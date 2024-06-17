"user client";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-white w-screen h-16 px-5 py-4  items-center top-0">
    <div>
      <img src="./images/Union.svg" className="w-40"/>
    </div>

   
        <div className="relative">
          <RiSearchLine className="text-lg absolute text-gray-400 top-2 left-2" />
          <input
            type="text"
            placeholder="Search here...."
            className=" pl-8 border border-gray-200 rounded-xl  h-9 w-96 focus:outline-none bg-gray-200 active:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-10 items-center mr-10  ">
          <MdOutlineDarkMode className="text-2xl" />
          <FaRegEnvelope className="text-xl" />
          <IoMdNotificationsOutline className="text-2xl" />
        </div>

    </header>
  );
};
export default Navbar;
