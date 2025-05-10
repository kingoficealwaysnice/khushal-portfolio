import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  postgresql,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  carrent,
  gearXpert,
  project3,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "AI Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Assembly",
    icon: assembly,
  },
];

const experiences = [
  {
    title: "Founder & AI Architect",
    company_name: "AI Solutions",
    icon: logo,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Leading the development of advanced machine learning models for financial markets.",
      "Architecting and implementing blockchain solutions for secure data management.",
      "Managing a team of developers and researchers in AI and blockchain projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Machine Learning Engineer",
    company_name: "Tech Innovations",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "March 2022 - December 2022",
    points: [
      "Developing and implementing advanced machine learning algorithms for predictive analytics.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Crypto Solutions",
    icon: logo,
    iconBg: "#383E56",
    date: "January 2022 - February 2022",
    points: [
      "Developing and maintaining blockchain-based applications and smart contracts.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Khushal's expertise in machine learning and deep learning is exceptional. His work on our AI trading bot project demonstrated his ability to implement complex algorithms and optimize them for real-world applications.",
    name: "Dr. Sarah Chen",
    designation: "Head of AI Research",
    company: "QuantTech Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Khushal on our blockchain project was a game-changer. His deep understanding of smart contracts and decentralized systems helped us build a robust and secure platform that exceeded our expectations.",
    name: "Michael Rodriguez",
    designation: "CTO",
    company: "BlockChain Innovations",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Khushal's contributions to our ML infrastructure were invaluable. His expertise in model optimization and deployment helped us achieve significant performance improvements in our recommendation systems.",
    name: "Dr. James Wilson",
    designation: "Lead Data Scientist",
    company: "AI Solutions Corp",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "AI Trading Bot",
    description:
      "An advanced machine learning-powered trading bot that analyzes market patterns and executes trades automatically. Features real-time market analysis, risk management, and portfolio optimization.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "NLP Research Assistant",
    description:
      "A sophisticated natural language processing system that helps researchers analyze and extract insights from large volumes of text data. Includes sentiment analysis, topic modeling, and entity recognition.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Computer Vision System",
    description:
      "A comprehensive computer vision system for object detection and tracking. Features real-time video processing, multiple object tracking, and advanced image recognition capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
