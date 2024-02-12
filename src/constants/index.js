import {
  engineer,
  fullstack,
  javascript,
  typescript,
  java,
  go,
  python,
  kube,
  reactjs,
  docker,
  allure,
  appium,
  selenium,
  unud,
  mitrais,
  finmas,
  dana,
  automation,
  sqa,
  linkedin,
  ig,
  twitter,
  github,
  testng,
} from '../assets';

export const navLinks = [

  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'work',
    title: 'Works',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Test Automation',
    icon: automation,
  },
  {
    title: 'Software Quality',
    icon: sqa,
  },
  {
    title: 'Full-Stack Developer',
    icon: fullstack,
  },
  {
    title: 'Tech Engineer',
    icon: engineer,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Go',
    icon: go
  },
  {
    name: 'Python',
    icon: python
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Appium',
    icon: appium
  },
  {
    name: 'Selenium',
    icon: selenium
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: kube,
  },
];

const experiences = [
  {
    title: 'Sr. Software Development Engineer in Test',
    company_name: ' DANA Indonesia',
    icon: dana,
    iconBg: '#333333',
    date: 'February 2020 - Present',
  },
  {
    title: 'Software Engineer In Test',
    company_name: 'Finmas',
    icon: finmas,
    iconBg: '#333333',
    date: 'Dec 2018 - Jan 2020',
    duration: '(1 year 2 months)'
  },
  {
    title: 'Software Quality Engineer',
    company_name: 'Mitrais',
    icon: mitrais,
    iconBg: '#333333',
    date: 'Jan 2017 - Dec 2018',
    duration: '(2 years)'
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Udayana University',
    icon: unud,
    iconBg: '#333333',
    date: 'Sep 2015 - Dec 2016',
    duration: '(1 year 4 months)'
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Allure Service Go',
    description: 'Dockerized, simple web service to generate Allure report from test results.',
    tags: [
      {
        name: 'Go',
        color: 'blue-text-gradient',
      },
      {
        name: 'Go-Fiber',
        color: 'pink-text-gradient',
      },
      {
        name: 'Docker',
        color: 'pink-text-gradient',
      },
    ],
    image: allure,
    repo: 'https://github.com/gungjodi/allure-service-go',
    demo: 'https://apps.gungj.tech/allure-service/swagger',
  },
  {
    id: 'project-2',
    name: 'TestNG Specific Starter',
    description: 'Java library to execute specific test using TestNG',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'TestNG',
        color: 'pink-text-gradient',
      },
    ],
    image: testng,
    repo: 'https://github.com/gungjodi/testng-specific',
    demo: 'https://central.sonatype.com/artifact/io.github.gungjodi/testng-specific-starter',
    buttonTitle: 'SEE PACKAGE'
  },
  // {
  //   id: 'project-2',
  //   name: 'Leaderboard',
  //   description:
  //     'A leaderboard list app that displays scores submitted by different players.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: leaderboard,
  //   repo: 'https://github.com/shaqdeff/Leaderboard',
  //   demo: 'https://shaqdeff.github.io/Leaderboard/',
  // },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

const socials = [
  {
    name: 'linkedin',
    link: import.meta.env.VITE_LINKEDIN_PROFILE_URL,
    icon: linkedin
  },
  {
    name: 'instagram',
    link: import.meta.env.VITE_INSTAGRAM_PROFILE_URL,
    icon: ig
  },
  {
    name: 'twitter',
    link: import.meta.env.VITE_TWITTER_PROFILE_URL,
    icon: twitter
  },
  {
    name: 'github',
    link: import.meta.env.VITE_GITHUB_PROFILE_URL,
    icon: github
  },
]

export { services, technologies, experiences, projects, socials };
