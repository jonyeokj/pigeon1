import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsChatLeftTextFill } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const CooCoo = () => {

  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  return (
    <div>
      <div className="mt-5">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-purple-500 to-pink-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">CooCoo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">CS1231S - Discrete Structures</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">CS2030S - Programming Methodology II</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-orange-500 to-yellow-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">CS2040S - Data Structures and Algorithms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-green-500 to-green-300 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">CS2100 - Computer Organisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CooCoo