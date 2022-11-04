import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuLink } from '../../models/menu-link';
import MenuDropdown from './MenuDropdown';

// Dropdown Items
const shopDropdownItems: MenuLink[] = [
  {
    name: 'مبل های سلطنتی',
    to: '/',
  },

  {
    name: 'دکوراسیون',
    to: '/',
  },

  {
    name: 'نور آرایی',
    to: '/categories/lighting',
  },
];

const pagesDropdownItems: MenuLink[] = [
  {
    name: 'کار ما چیست؟',
    to: '/',
  },

  {
    name: 'درباره ما',
    to: '/about-us',
  },

  {
    name: 'سوالات پر تکرار',
    to: '/faq',
  },
];

const Menu = () => {
  const [pagesHover, setPagesHover] = useState(false);
  const [shopHover, setShopHover] = useState(false);

  return (
    <div className='items-center hidden text-sm text-gray-900 md:flex space-s-7'>
      {/* Link Items */}
      <div className='relative group'>
        <Link
          to='/'
          className='inline-block text-gray-500 duration-300 py-7 hover:text-gray-500'
        >
          خانه
        </Link>
      </div>

      {/* Shop */}
      <motion.div
        onHoverStart={() => setShopHover(true)}
        onHoverEnd={() => setShopHover(false)}
        className='relative'
      >
        <Link
          to='/shop'
          className='inline-block duration-300 py-7 hover:text-gray-500'
        >
          فروشگاه
        </Link>

        {/* Dropdown */}
        <AnimatePresence>
          {shopHover && <MenuDropdown items={shopDropdownItems} />}
        </AnimatePresence>
      </motion.div>

      {/* Pages */}
      <motion.div
        onHoverStart={() => setPagesHover(true)}
        onHoverEnd={() => setPagesHover(false)}
        className='relative'
      >
        <a
          href='/'
          className='inline-block duration-300 py-7 hover:text-gray-500'
        >
          صفحات
        </a>

        {/* Dropdown */}
        <AnimatePresence>
          {pagesHover && <MenuDropdown items={pagesDropdownItems} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
