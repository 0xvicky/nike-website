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
        <ul className='max-lg:hidden flex-1 flex gap-16 items-center justify-center'>
          {navLinks?.map(item => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-500'>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href='#'
          className='font-montserrat text-lg font-medium max-lg:hidden'>
          Sign in / Explore now
        </a>
        <div>
          <img
            src={hamburger}
            width={25}
            height={25}
            alt=''
            className='max-lg:block hidden'
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
