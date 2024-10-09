import { Avatar } from '@mantine/core';

const SkillBadge = (skills: []) => {
  return skills.map((skill: any, index: number) => (
    <div
      key={index}
      className="flex gap-2 border border-textColor py-2 px-3 rounded-2xl items-center"
    >
      <img className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"  src={`Icons/${skill}.png`} />
      <div className="text-textColor text-xl font-medium">{skill}</div>
    </div>
  ));
};

const SkillCard = (props: any) => {
  return (
    <div data-aos="fade-up" data-aos-duration="8000" className="w-[49%] !shadow-[0_0_10px_0px_#64FFDA50] rounded-2xl border border-primaryColor p-5">
      <div className="text-3xl mb-4 text-white text-center font-bold">
        {props.title}
      </div>
      <div className="flex gap-3 justify-center flex-wrap">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillCard;
