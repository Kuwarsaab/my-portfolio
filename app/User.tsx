import { link } from 'fs';
import { title } from 'process';
import Skills from './Components/Skills';
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';

const Info = {
  name: 'Akash Verma',
  stack: [
    'Software Engineer',
    'Competetive Programmar',
    'Full Stack Web Developer',
    'Software Developer',
    'Open Source Contributor',
  ],
  bio: 'I’m a PHP developer with 1.3 year of experience in creating dynamic web applications. I specialize in leveraging PHP and frameworks like Laravel to build efficient, user-friendly solutions. Passionate about clean code and innovative design, I enjoy collaborating with teams to bring ideas to life. When I’m not coding, I love exploring new technologies and contributing to open-source projects. Let’s connect!',
};

const SkillInfo = [
  {
    title: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'javaScript',
      'React JS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Laravel',
      'Yii2',
      'Node JS',
      'Express JS',
      'MySQL',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    title: 'Languages',
    skills: ['C', 'Java', 'PHP', 'Python', 'JavaScript'],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Eclipse',
      'Postman',
      'PhpMyAdmin',
      'MS Office',
    ],
  },
];

const ProjectInfo = [
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
  {
    title: 'Norway Fjord',
    desc: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
    image:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    live: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Mantine'],
    link: 'https://norway-fjord-adventures.vercel.app/',
    github: 'https://github.com',
  },
];
const ExperienceInfo = [
  {
    role: 'Software Developer',
    company: 'ToXSL Technologies Pvt Ltd',
    date: 'March 2024 - Present',
    desc: 'Leveraged PHP Frameworks like Laravel and Yii2 and resources like composer for efficient backend operation. Conducted API implementation, fetching, mapping and posting of data including to different APIs, endpoints for PUT, GET, POST and DELETE methods.',
    skills: ['PHP', 'Yii2', 'Laravel', 'Bootstrap', 'MySQL'],
  },
  {
    role: 'Full Stack Developer Trainee',
    company: 'Geeta Pariwar',
    date: 'June 2023 - March 2024',
    desc: 'Developed and maintained full stack Ed-Tech web application using PHP and MySQL, focusing user-centric layout views. Worked on user management, exam management and content management portals. Designed and developed their multiple online portals which increases their global presence.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
];

const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const socialLinks = [
  { link: 'https://github.com/akashverma004', icon: IconBrandGithub },
  { link: 'https://linkedin.com/in/akashverma004', icon: IconBrandLinkedin },
  { link: 'https://leetcode.com/u/akash_verma_004/', icon: IconBrandLeetcode },
  { link: 'https://facebook.com/', icon: IconBrandFacebook },
  { link: 'https://x.com/AkashVerma214', icon: IconBrandX },
  { link: 'https://www.instagram.com/__akash_004', icon: IconBrandInstagram },
  { link: 'https://youtube.com/', icon: IconBrandYoutube },
];

export { Info, ProjectInfo, SkillInfo, ExperienceInfo, Slugs, socialLinks};
