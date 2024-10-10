'use client';
import { Timeline } from '@mantine/core';
import {
  IconBriefcaseFilled
} from '@tabler/icons-react';
import { ExperienceInfo } from '../User';

const TimelineItem = (items: any) => {
  return items.map((item: any, index: number) => (
    <Timeline.Item key={index} className='!pt-12 !mb-2' data-aos="fade-up" data-aos-duration="8000"
      bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}
    >
      <div className='border flex flex-col gap-2 border-primaryColor p-4 rounded-2xl !shadow-[0_0_10px_0px_#64FFDA50] '>
          <div className='flex gap-2 items-center'>
            <img className='rounded-lg w-16' src={`${item.company}.png`} alt="Company" />
            <div className='flex flex-col'>
              <div className='text-white text-2xl font-semibold'>{item.role}</div>
              <div className='text-lg font-semibold text-textColor'>{item.company} &#x2022; {item.date}</div>
              <div className='text-textColor leading-6 text-justify'>{item.desc}</div>
              <div className='mt-4 text-lg font-medium text-textColor'><span className='font-semibold text-white'>Skills:</span>
                  {item.skills.map((skill:any, index:number) => <span key={index}> &#x2022; {skill}</span>)}
              </div>
            </div>
          </div>
      </div>
    </Timeline.Item>
  ));
};

const Experience = () => {
  return (
    <div  className="px-16 mx-20 my-5 mb-28 font-mono" id="Experience">
      <h1 className="text-4xl mb-10 font-bold text-white">
        <span className="text-primaryColor">04.&nbsp;</span>Experience
      </h1>
      <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={2}>
        {TimelineItem(ExperienceInfo)} 
      <Timeline.Item bullet={<IconBriefcaseFilled className="!text-bgColor" size={20} />}></Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Experience;
