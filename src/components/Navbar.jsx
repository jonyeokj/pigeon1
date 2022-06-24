import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Profile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipLocation } from '@syncfusion/ej2/svg-base';
import avatar from '../data/avatar.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    >
      {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked } = useStateContext();
  
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
       <div>
        <NavButton title="Menu" 
        customFunc={setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color='blue' 
        icon={<AiOutlineMenu />} />
        <TooltipComponent content="Profile" position="Center">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('Profile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.Profile && (<Profile />)}
       </div>
    </div>
  )
}

export default Navbar
