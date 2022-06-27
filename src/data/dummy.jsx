import React from 'react';
import { MdOutlineSpaceDashboard, MdNotificationsActive } from 'react-icons/md';
import { BsFillChatLeftFill, BsTable} from 'react-icons/bs';
import { GrSchedule, GrTask } from 'react-icons/gr';
import { FiAlertCircle } from 'react-icons/fi';

export const links = [
    {
      title: 'Pigeon',
      links: [
        {
          name: 'Dashboard',
          icon: <MdOutlineSpaceDashboard />,
        },
      ],
    },
  
    {
      title: 'Functions',
      links: [
        {
          name: 'CooCoo',
          icon: <BsFillChatLeftFill />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'Calendar',
          icon: <GrSchedule />,
        },
        {
          name: 'Timetable',
          icon: <BsTable />,
        },
        {
          name: 'Checklist',
          icon: <BsTable />,
        },
      ],
    },
  ];

export const DashB = [
  {
    icon: <MdNotificationsActive />,
    title: 'Announcements',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <GrTask />,
    title: 'Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    onclick: ()=> console.log('test')
  },
  {
    icon: <FiAlertCircle />,
    title: 'Important',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  }
];