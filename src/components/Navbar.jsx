import {headerLogo} from "../assets/images/";
import {hamburger} from "../assets/icons";
import {navLinks} from "../constants/index";
const Navbar = () => {
  return (
    <header className='absolute padding-x py-8 z-10 w-full'>
      <nav className=' flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt=''
          />
        </a>
        <img
          className='w-9 h-9 cursor-pointer'
          src={hamburger}
          alt=''
        />
      </nav>
      <ul className='max-lg:hidden'>
        {navLinks?.map(item => {
          return (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal'>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
