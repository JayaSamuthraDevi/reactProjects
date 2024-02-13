import { images, icons } from '../assets';
import { SidebarType } from '../types/sidebar';

export const sidebar: SidebarType = {
  logo: images.companyLogo,
  menu: [
    {
      icon: <icons.FaHome fontSize={27} />,
      name: 'Home',
      submenu: ['All', 'Divum', 'Param'],
    },
    {
      icon: <icons.FaRegAddressBook fontSize={27} />,
      name: 'Assets',
      submenu: ['Asset Details', 'Assign Asset', 'Add Asset', 'Edit Asset'],
    },
    { icon: <icons.FaRegKeyboard fontSize={27} />, name: 'Accessories' },
    { icon: <icons.FaUser fontSize={27} />, name: 'Employee' },
    { icon: <icons.IoIosPeople fontSize={27} />, name: 'Vendor' },
    { icon: <icons.FaExchangeAlt fontSize={27} />, name: 'Swap Assets' },
    { icon: <icons.TbReport fontSize={27} />, name: 'Report' },
  ],
  logout: { icon: <icons.FaSignInAlt />, name: 'Logout' },
};

export const graphBgColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
];

export const graphBorderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];
