import React from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BsFillChatLeftFill, BsTable} from 'react-icons/bs';
import { GrSchedule} from 'react-icons/gr';

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
      ],
    },
  ];