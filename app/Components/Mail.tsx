const Mail = () => {
  return (
    <div className="flex items-center text-textColor gap-10 fixed bottom-40 -right-40 rotate-90">
      <div data-aos="fade-down-left" data-aos-duration="8000">
        <a
          href="mailto:akash8bp@gmail.com"
          className="font-mono text-lg hover:text-primaryColor tracking-widest hover:-translate-x-2 transition-transform duration-300 ease-in-out"
        >
          akash8bp@gmail.com
        </a>
      </div>
      <hr className="border-[3px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Mail;
