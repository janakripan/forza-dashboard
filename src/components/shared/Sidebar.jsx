import React from "react";
import sidebarLogo from '../../assets/sidebarLogo.svg'
import logotext from '../../assets/logoText.svg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {



  
  return (
    <div
      className={`h-screen fixed left-0 top-0 flex flex-col justify-between gap-1.75 bg-white shadow-[20px_-2px_44px_0px_rgba(0,52,173,0.10),178px_-18px_107px_0px_rgba(0,52,173,0.05)] rounded-r-[16px] gap-y-5.5 py-4  ${sidebarOpen ? "w-64 px-4" : "w-20 px-2"} transition-all duration-300`}
    >

      {/* logo section  */}
      <div className={`w-full h-fit flex p-0 flex-row  justify-between items-center  relative transition-all duration-500 `}>

        {/* logo */}
        <div className="w-[66px] h-[66px] flex items-center justify-center shrink-0">
          <img src={sidebarLogo} alt="logo" className="w-[66px] h-[66px]  " />
        </div>
        {/* logo text  */}
        <div className={`bg-white overflow-hidden   transition-all duration-500 ${sidebarOpen ? "w-fit pr-4 flex justify-end" : "w-0 hidden p-0"}`}>
          <img src={logotext} alt="logo text" className="w-[128px] h-[30px]" />
        </div>


        {/* sidebar button  */}
        <button className={`bg-white flex items-center justify-center absolute  top-1/2 -translate-y-1/2 w-5.5 h-5.5 rounded-full border border-[#E2E8F0] z-20  text-[#081021] ${sidebarOpen ? " -right-7" : "rotate-180 -right-5.5"} transition-all duration-300 `}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        >

          <MdOutlineKeyboardArrowRight/>

        </button>


      </div>


      {/* nav section  */}
      <nav className="w-full h-fit flex flex-col gap-1.75  ">

      </nav>


    </div>
  );
};

export default Sidebar;
