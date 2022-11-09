import { AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { useState } from 'react';
import MobileMenuDropdown from './MobileMenuDropdown';
import Backdrop from '../common/Backdrop';
import { useAuthContext } from '../../context/AuthContext';

interface MobileMenuProps {
  open: boolean;
  toggle: () => void;
}

const MobileMenu = ({ open, toggle }: MobileMenuProps) => {
  const { openModal: openAuthModal } = useAuthContext();

  const [shopSubmenu, setShopSubmenu] = useState(false);
  const [pagesSubmenu, setPagesSubmenu] = useState(false);

  const toggleShopSubmenu = () => setShopSubmenu((state) => !state);
  const togglePagesSubmenu = () => setPagesSubmenu((state) => !state);

  const openAuthModalHandler = () => {
    // open auth modal
    openAuthModal();

    // close mobile menu
    setTimeout(toggle, 500);
  };

  // Dropdown Items
  const shopDropdownItems = [
    {
      name: 'همه محصولات',
      to: '/shop',
    },
    {
      name: 'مبل سلطنتی',
      to: '/',
    },
    {
      name: 'مبل راحتی',
      to: '/',
    },
  ];

  const pagesDropdownItesm = [
    {
      name: 'همه محصولات',
      to: '/',
    },
    {
      name: 'مبل سلطنتی',
      to: '/',
    },
    {
      name: 'مبل راحتی',
      to: '/',
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {open && (
        <Backdrop className='z-40 !bg-transparent md:hidden' onClick={toggle} />
      )}

      {/* Menu */}
      <div
        className={`block md:hidden fixed top-0 right-0 w-full sm:w-96 h-full bg-[#111111] text-white z-50 transition ease-out duration-300 py-32 px-10 overflow-hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div
          className='fixed text-2xl cursor-pointer top-10 right-10'
          onClick={toggle}
        >
          <IoMdClose />
        </div>

        {/* Items Container */}
        <div className='flex flex-col items-start h-full space-y-5 overflow-y-auto no-scrollbar text-stone-400'>
          {/* Menu Item 1 */}
          <div className='relative w-full'>
            <a
              href='/'
              className='flex items-center w-full text-2xl text-white duration-200 hover:text-white space-s-1'
            >
              <span>خانه</span>
            </a>
          </div>

          {/* Menu Item 2 */}
          <div className='relative w-full'>
            <span
              className='flex items-center w-full text-2xl duration-200 cursor-pointer hover:text-white space-s-1'
              onClick={toggleShopSubmenu}
            >
              <span>فروشـــــگاه</span>
              <AiOutlineCaretLeft
                className={`text-xs duration-200 ${
                  shopSubmenu && '-rotate-90'
                }`}
              />
            </span>

            {/* Submenu Container (Dropdown) */}
            <AnimatePresence>
              {shopSubmenu && (
                <MobileMenuDropdown
                  items={shopDropdownItems}
                  onClickItem={toggle}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Menu Item 3 */}
          <div className='relative w-full'>
            <span
              className='flex items-center w-full text-2xl duration-200 cursor-pointer hover:text-white space-s-1'
              onClick={togglePagesSubmenu}
            >
              <span>صفحـــات</span>
              <AiOutlineCaretLeft
                className={`text-xs duration-200 ${
                  pagesSubmenu && '-rotate-90'
                }`}
              />
            </span>

            {/* Submenu Container (Dropdown) */}
            <AnimatePresence>
              {pagesSubmenu && (
                <MobileMenuDropdown
                  items={pagesDropdownItesm}
                  onClickItem={toggle}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Menu Item 4 */}
          <div className='relative w-full'>
            <span
              onClick={openAuthModalHandler}
              className='flex items-center w-full text-2xl duration-200 cursor-pointer hover:text-white space-s-1'
            >
              <span>ورود / عضویــــت</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
