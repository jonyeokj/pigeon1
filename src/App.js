import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, CooCoo, Sidebar, Profile } from './components';
import { Home, Dashboard, Timetable, Calender } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const { activeMenu, setActiveMenu } = useStateContext();
  
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent
                content="Settings"
                position="Top"
              >
                <button
                  type="button"
                  style={{ background: 'blue', borderRadius: '50%' }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>

              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
                </div>
            )}
            <div  className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
            </div>
            <div>
              <Routes>
                {/* Main page */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* Chat & others */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/coocoo" element={<CooCoo />} />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calender" element={<Calender />} />
              </Routes>
            </div> 
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App