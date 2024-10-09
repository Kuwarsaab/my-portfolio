import { IconHexagonLetterA } from '@tabler/icons-react';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';

const links = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Work' },
  { id: 3, name: 'Skills' },
  { id: 4, name: 'Experience' },
  { id: 5, name: 'Contact' },
];

const navLinks = (col: Boolean, clicked:any) => {
  const handleClick = () => {
    if(clicked)clicked();
  }
  return links.map((link) => {
    return (
      <a
      onClick={handleClick}
        className={`${
          col ? 'flex flex-col items-center' : ''
        } hover:text-primaryColor text-lg font-mono text-textColor`}
        href={`#${link.name}`}
      >
        <span className="text-primaryColor">0{link.id}. </span>
        {link.name}
      </a>
    );
  });
};

const Header = () => {
  const [show, setShow] = useState(true);
  const [shadow, setShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavBar = (() => {
    if(window.scrollY > lastScrollY && window.scrollY>70)setShow(false);
    else setShow(true);
    if(window.scrollY > 70)setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  });
  useEffect(() => {
    window.addEventListener('scroll', controlNavBar);
    return ()=>window.removeEventListener('scroll', controlNavBar);
  })
  return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} z-10 transition-transform duration-500 ease-in-out fixed w-full justify-between items-center px-10 h-[16vh] bg-bgColor`}>
      <IconHexagonLetterA
        className="z-10"
        size={60}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="md:flex gap-8 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
