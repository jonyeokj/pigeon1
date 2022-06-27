import React from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsCalendarEvent, BsMegaphone, BsFillChatLeftFill, BsCheck2} from 'react-icons/bs';

export const links = [
    {
      title: 'Home',
      links: [
        {
          name: 'Dashboard',
          icon: <MdOutlineSpaceDashboard />,
        },
      ],
    },
  
    {
      title: 'Links',
      links: [
        {
          name: 'CooCoo',
          icon: <BsFillChatLeftFill />,
        },
        {
          name: 'Teaching',
          icon: <FaChalkboardTeacher />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'Announcements',
          icon: <BsMegaphone />,
        },
        {
          name: 'Timetable',
          icon: <BsCalendarEvent />,
        },
        {
          name: 'Checklist',
          icon: <BsCheck2 />,
        },
      ],
    },
  ];

export const DashB = [
  {
    icon: <BsFillChatLeftFill />,
    title: 'Coocoo',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Teaching',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsMegaphone />,
    title: 'Announcements',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
  {
    icon: <BsCalendarEvent />,
    title: 'Timetable',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
  {
    icon: <BsCheck2 />,
    title: 'Checklist',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  }
];