import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsChatLeftTextFill } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const CooCoo = () => {

  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  
  return (
    <div>CooCoo</div>
  )
}

export default CooCoo