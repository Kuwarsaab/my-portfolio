'use client';
import { useEffect, useState } from 'react';
import { Info } from '../User';
//@ts-ignore
import DOTS from 'vanta/src/vanta.dots';
//@ts-ignore
import TRUNK from 'vanta/src/vanta.trunk';
import Typewriter from 'typewriter-effect';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResumeViewer from './ResumeViewer';
import { IconDownload } from '@tabler/icons-react';
import Particles from './magicui/Particles';
import { NeonGradientCard } from './magicui/neon-gradient-card';

const About = () => {
  const [dots, setDots] = useState<any>(null);
  const [trunk, setTrunk] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: '#bg',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64ffda,
          color2: 0x8892b0,
          backgroundColor: 0x112240,
          size: 3,
          spacing: 20,
          showLines: false,
        })
      );
    }

    if (!trunk) {
      setTrunk(
        TRUNK({
          el: '#photo',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64ffda,
          backgroundColor: 0x112240,
          spacing: 0,
          chaos: 4.0,
        })
      );
    }
    return () => {
      if (dots) dots.destroy();
      if (trunk) trunk.destroy();
    };
  }, []);

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
            I'm a&nbsp;
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
