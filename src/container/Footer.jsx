import footerLogo from "../assets/images/footer-logo.svg";
import {footerLinks, socialMedia} from "../constants";
const Footer = () => {
  return (
    <div className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt=''
              width={150}
              height={46}
            />
          </a>
          <p className='mt-6 text-base text-white-400 sm:max-w-sm leading-7'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect
            Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map(icon => {
              return (
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img
                    src={icon.src}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map(section => {
            return (
              <div key={section}>
                <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map(link => {
                    return (
                      <li
                        className='mt-3 text-white-400 font-montserrat hover:text-slate-gray cursor-pointer'
                        key={link.name}>
                        <a>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
