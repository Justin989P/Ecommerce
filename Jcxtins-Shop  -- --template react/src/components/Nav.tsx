import { useContext, useEffect, useState } from "react";
import { BsAirplaneEngines, BsBag, BsArrowRight } from "react-icons/bs";
import { AppContexts } from "./Context/AppContext";
import MyCarts from "./MyCarts";

const Nav = () => {
  const { numberOfCart, showMycarts, showMycartsHandler } =
    useContext(AppContexts);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
     window.scrollY > 60?setIsActive(true):setIsActive(false)
   }) 
  })
  return (
    <header className={`${isActive?'bg-white  px-6 lg:px-12 py-5 fixed top-0 right-0 left-0 drop-shadow-md z-[100]':'bg-none  px-6 lg:px-12 py-5 fixed z-[100] top-0 w-full'}`}>
      <div className="flex flex-row justify-between">
        <p className="text-[16px] tracking-tighter font-bold text-sky-500">
          JCXTIN
        </p>
        <div className="relative cursor-pointer" onClick={showMycartsHandler}>
          <BsBag className="text-[20px] " />
          <div className="bg-sky-500 w-4 h-4  rounded-full absolute top-[10px] left-[8px] text-[10px] text-white flex justify-center items-center">
            {numberOfCart}
          </div>
        </div>
        {showMycarts && <MyCarts />}
      </div>
    </header>
  );
};

export default Nav;
