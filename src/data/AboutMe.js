import profilePic from "../assets/images/profile/alejandro.png";

import {
  FaCogs,
  FaTools,
} from "react-icons/fa";
import {
  FaLaptopCode,
  FaMobileScreen,
  FaBook,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaSass,
  FaLaravel,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaFigma,
  FaTrello,
} from "react-icons/fa6";
import {
  IoLogoJavascript,
  IoLogoVue,
} from "react-icons/io5";
import {
  MdWeb,
} from "react-icons/md";
import {
  SiRedux,
  SiVite,
  SiMui,
  SiNextdotjs,
  SiVuetify,
  SiJquery,
  SiTailwindcss,
  SiExpress,
  SiStrapi,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJira,
  SiVercel,
  SiPostman,
  SiSwiper,
} from "react-icons/si";

export const aboutMe = {
  image: profilePic,
  description: "I have been coding for over 6 years, starting my journey in 2019. " +
    "As a self-taught person I initially learned HTML, CSS, JavaScript and PHP " +
    "while doing simple website projects. As I progressed, I focused mainly on React " +
    "and NodeJS, as well as other technologies such as Laravel or Tailwind.\n\n" +
    "Now my goal is to create scalable, responsive and high-quality web " +
    "applications using the latest technologies, ensuring efficient and " +
    "well-structured solutions, always striving to deliver projects that exceed " +
    "expectations.\n\n" +
    "I'm always open to expanding my knowledge, learning new technologies and " +
    "practices at every opportunity and adapting quickly to new challenges and tools.",
  urlCV: "https://drive.google.com/file/d/1wlrRlwrSarDJ-Fj5_xK_f5AjdC6OF1Kw/view",
  skills: [
    {
      title: "Languages",
      icon: FaLaptopCode,
      show: true,
      techStacks: [
        {
          name: "HTML",
          icon: FaHtml5,
        },
        {
          name: "CSS",
          icon: FaCss3Alt,
        },
        {
          name: "JavaScript",
          icon: IoLogoJavascript,
        },
        {
          name: "PHP",
          icon: FaPhp,
        },
      ],
    },
    {
      title: "Front-end",
      icon: MdWeb,
      show: true,
      techStacks: [
        {
          name: "React",
          icon: FaReact,
        },
        {
          name: "Redux",
          icon: SiRedux,
        },
        {
          name: "Vite",
          icon: SiVite,
        },
        {
          name: "Material UI",
          icon: SiMui,
        },
        {
          name: "NextJS",
          icon: SiNextdotjs,
        },
        {
          name: "Vue",
          icon: FaVuejs,
        },
        {
          name: "Vuetify",
          icon: SiVuetify,
        },
        {
          name: "Vuex",
          icon: IoLogoVue,
        },
        {
          name: "jQuery",
          icon: SiJquery,
        },
        {
          name: "Bootstrap",
          icon: FaBootstrap,
        },
        {
          name: "Sass",
          icon: FaSass,
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
        },
        {
          name: "Flowbite",
          icon: SiTailwindcss,
        },
        {
          name: "Swiper",
          icon: SiSwiper,
        },
      ],
    },
    {
      title: "Back-end",
      icon: FaCogs,
      show: true,
      techStacks: [
        {
          name: "Laravel",
          icon: FaLaravel,
        },
        {
          name: "NodeJS",
          icon: FaNodeJs,
        },
        {
          name: "Express",
          icon: SiExpress,
        },
        {
          name: "Strapi",
          icon: SiStrapi,
        },
        {
          name: "MySQL",
          icon: SiMysql,
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
        },
      ],
    },
    {
      title: "Mobile",
      icon: FaMobileScreen,
      show: false,
      techStacks: [],
    },
    {
      title: "Other Skills",
      icon: FaTools,
      show: true,
      techStacks: [
        {
          name: "Git",
          icon: FaGitAlt,
        },
        {
          name: "GitHub",
          icon: FaGithub,
        },
        {
          name: "GitLab",
          icon: FaGitlab,
        },
        {
          name: "Bitbucket",
          icon: FaBitbucket,
        },
        {
          name: "Figma",
          icon: FaFigma,
        },
        {
          name: "Jira",
          icon: SiJira,
        },
        {
          name: "Trello",
          icon: FaTrello,
        },
        {
          name: "Vercel",
          icon: SiVercel,
        },
        {
          name: "Postman",
          icon: SiPostman,
        },
      ],
    },
    {
      title: "To learn",
      icon: FaBook,
      show: false,
      techStacks: [
        {
          name: "Python",
          icon: null,
        },
        {
          name: "Django",
          icon: null,
        },
        {
          name: "Typescript",
          icon: null,
        },
        {
          name: "OpenAI",
          icon: null,
        },
        {
          name: "Astro",
          icon: null,
        },
        {
          name: "React Native",
          icon: null,
        },
        {
          name: "Expo",
          icon: null,
        },
        {
          name: "Flutter",
          icon: null,
        },
        {
          name: "NestJS",
          icon: null,
        },
        {
          name: "GraphQL",
          icon: null,
        },
        {
          name: "Supabase",
          icon: null,
        },
        {
          name: "Firebase",
          icon: null,
        },
        {
          name: "AWS",
          icon: null,
        },
        {
          name: "Docker",
          icon: null,
        },
        {
          name: "Kubernetes",
          icon: null,
        },
        {
          name: "Shadcn",
          icon: null,
        },
      ],
    }
  ]
}
