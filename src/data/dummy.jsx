import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';

export const links = [
    {
      title: 'Pigeon',
      links: [
        {
          name: 'Dashboard',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'Functions',
      links: [
        {
          name: 'CooCoo',
          icon: <AiOutlineShoppingCart />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'Calendar',
          icon: <AiOutlineCalendar />,
        },
        {
          name: 'Timetable',
          icon: <BsKanban />,
        },
      ],
    },
  ];