import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChalkboardTeacher } from 'react-icons/fa'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Teaching = () => {

  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  return (
    <div>
      <div className="mt-5">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-purple-500 to-pink-500 to-fuchsia-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">Teaching</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teaching