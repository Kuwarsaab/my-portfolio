'use client';
import { Info } from '../User';
import Typewriter from 'typewriter-effect';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResumeViewer from './ResumeViewer';
import { IconDownload } from '@tabler/icons-react';
import Particles from './magicui/Particles';
import { NeonGradientCard } from './magicui/neon-gradient-card';

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div
        className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-16 h-[80vh]"
        id="bg"
      >
        <Particles
          className="absolute inset-0"
          quantity={1000}
          ease={80}
          color="#64FFDA"
          vx={0.1}
          vy={0.1}
          refresh
        />
        <div className="ml-20 w-3/5 flex flex-col">
          <div className="text-primaryColor text-3xl">Hi, I am</div>
          <div className="text-white text-[4.25rem] font-extrabold">
            {Info.name}
          </div>
          <div className="text-white text-4xl flex">
            I&apos;m a&nbsp;
            <span className="text-primaryColor font-semibold">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-textColor text-xl w-[90%] text-justify my-8 font-semibold">
            {Info.bio}
          </div>
          <div className="flex gap-3">
            <Button
              component="a"
              onClick={open}
              className="!text-bgColor !w-fit"
              variant="filled"
              color="#64ffda"
              size="lg"
            >
              Check Resume
            </Button>
            <Button
              component="a"
              className="!text-primaryColor !w-fit"
              variant="outline"
              color="#64ffda"
              size="lg"
              rightSection={<IconDownload size={20} />}
              href="Akash-resume.pdf"
              download={Info.name}
            >
              Download
            </Button>
          </div>
        </div>
        <div
          className="h-fit flex justify-center items-center rounded-full mr-14 w-fit"
          id="photo"
        >
          <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center">
            <img
              src="my1.jpg"
              alt="Akash Verma"
              className="w-full h-full rounded-full"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
