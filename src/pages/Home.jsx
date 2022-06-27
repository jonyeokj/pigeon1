import React from 'react'

import { useStateContext } from '../contexts/ContextProvider';
import { Dashboard, CooCoo } from '../components';
import { DashB } from '../data/dummy';

const Home = () => {
  return (
    <div>
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
      <div className="columns-2xl overflow-auto">
        <div className="columns-2xl overflow-auto">
          <Dashboard />
        </div>
        <div className='flex justify item-center'>
          <CooCoo /> 
        </div>      
      </div>  
    </div>
  )
}

export default Home