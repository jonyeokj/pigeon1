import React from 'react'

import { DashB } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  return (
    <div className="mt-5">
      <div className="mt-3">
        <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        h-44 rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
        bg-gradient-to-r from-purple-500 to-pink-500 to-fuchsia-500 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-3xl text-white">Welcome Back, User!</p>
              <p className="text-white">20 May 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
      rounded-xl p-8 pt-9 m-3
      bg-gradient-to-r from-purple-500 to-pink-500 to-fuchsia-500 bg-no-repeat bg-cover">
        <div>
          <p className="font-bold text-3xl text-white">Dashboard</p>
          <div className="flex mt-14 flex-wrap justify-center gap-5 items-center">
            {DashB.map((item) => (
              <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-bold text-xl text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard