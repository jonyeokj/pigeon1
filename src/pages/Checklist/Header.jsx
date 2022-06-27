import React from 'react';

const Header = () => {
    return (
        <div>
        <div className="mt-5">
          <div className="flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          rounded-xl w-half lg:w-90 p-8 pt-9 m-3 
          bg-gradient-to-r from-purple-500 to-pink-500 to-fuchsia-500 bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-3xl text-white">Checklist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;