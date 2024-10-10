import { Info, socialLinks } from '../User';

const Footer = () => {
  const socialIcons = socialLinks.map((socialLink, index) => {
    return (
      <a
        key={index}
        href={`${socialLink.link}`}
        className="font-mono text-lg hover:text-primaryColor hover:-scale-105 transition-transform duration-300 ease-in-out"
        target="_blank"
      >
        <socialLink.icon size={30} />
      </a>
    );
  });
  return (
    <div className="mx-36 mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
      <div className="text-3xl text-primaryColor font-semibold">
        {Info.name}
      </div>
      <div className='md-mx:flex text-textColor gap-8 hidden sm-mx:gap-3'>{socialIcons}</div>
      <div className="text-xl text-textColor">
        Copyright &copy; {new Date().getFullYear()} {Info.name} | All Right
        Reserved
      </div>
    </div>
  );
};

export default Footer;
