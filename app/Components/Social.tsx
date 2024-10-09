import { socialLinks } from "../User";


const Social = () => {
  const socialIcons = socialLinks.map((socialLink) => {
    return (
      <a
        href={`${socialLink.link}`}
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition-transform duration-300 ease-in-out"
        target="_blank"
      >
        <div data-aos="fade-up-left" data-aos-duration="8000">
          <socialLink.icon className="-rotate-90" size={30} />
        </div>
      </a>
    );
  });
  return (
    <div className="flex items-center text-textColor gap-3 fixed bottom-40 -left-44 rotate-90">
      {socialIcons}
      <hr className="border-[3px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Social;
