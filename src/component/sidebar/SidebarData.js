import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/home',
    icon: <AiIcons.AiFillDashboard className='fade-1' style={{color:`rgb(4,64,132)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'My Plan',
    path: '/myplan',
    icon: <IoIcons.IoIosPaper className='fade-1' style={{color:`rgb(4,64,132)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/service',
    icon: <img src='https://dentalforhome.s3.amazonaws.com/images/suitcase.png' className='fade-1' style={{height:`20px`,width:`20px`}} />,
    cName: 'nav-text'
  },
  {
    title: 'My bookings',
    path: '/booking',
    icon: <FaIcons.FaCalendarAlt className='fade-1' style={{color:`rgb(4,64,132)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/messages',
    icon: <FaIcons.FaHistory className='fade-1' style={{color:`rgb(4,64,132)`}} />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/support',
    icon: <AiIcons.AiTwotoneSetting className='fade-1' style={{color:`rgb(4,64,132)`}} />,
    cName: 'nav-text'
  }
];