import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  elearning,
  bob,
  leetcode,
  tripguide,
  threejs,
  voting,
  notemate,
  clothing,
  // Import your local logo files
  coursera,
  nptel,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "certifications", // Add this new link
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Design & Development",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LeetCode Helper Extension",
    description:
      "Chrome extension providing real-time hints and solutions for 3000+ LeetCode questions with a user-friendly interface and dynamic hint system that adapts to user responses for guided learning.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "chrome-api",
        color: "green-text-gradient",
      },
      {
        name: "html-css",
        color: "pink-text-gradient",
      },
    ],
    image: leetcode, // Replace with leetcode extension screenshot
    source_code_link: "https://github.com/piyush-kumar-agarwal1/leetcode-helper",
  },
  {
    name: "Break Your Boredom",
    description:
      "AI-powered recommendation platform across 5 categories, curating 1,000+ recommendations based on user preferences with sentiment analysis and NLP, improving recommendation accuracy by 35%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node-express",
        color: "orange-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: bob, // Replace with break your boredom screenshot
    source_code_link: "https://github.com/piyush-kumar-agarwal1/break-your-boredom",
  },
  {
    name: "E-Learning Platform",
    description:
      "Scalable learning platform with 20+ courses, interactive modules, and secure authentication. Features role-based access control, AI chatbot for student support, and optimized content delivery with lazy loading and caching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: elearning, // Replace with e-learning platform screenshot
    source_code_link: "https://github.com/piyush-kumar-agarwal1/elearning-platform",
  },
  {
    name: "Online Voting System",
    description:
      "Secure web-based voting platform built with PHP that enables electronic voting with user authentication, real-time vote counting, and result visualization. Ensures data integrity and voter privacy through session management.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css-js",
        color: "pink-text-gradient",
      },
    ],
    image: voting, // Replace with your voting system image
    source_code_link: "https://github.com/piyush-kumar-agarwal1/online-voting-system",
  },
  {
    name: "Notemate",
    description:
      "MERN-based note-making application featuring full CRUD operations, user authentication, and real-time updates. Supports rich text formatting, note organization with tags/folders, and responsive design for all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: notemate, // Replace with your notemate image
    source_code_link: "https://github.com/piyush-kumar-agarwal1/notemate",
  },
  {
    name: "Online Clothing Store",
    description:
      "E-commerce platform for fashion featuring product catalog, shopping cart, and user accounts with MongoDB backend. Includes responsive design, product filtering, wishlist functionality, and product detail views.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: clothing, // Replace with your clothing store image
    source_code_link: "https://github.com/piyush-kumar-agarwal1/online-clothing-store",
  },
];

const certifications = [
  {
    id: "cert-1",
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Mar 2024",
    credentialId: "U3885LB39YTQ",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/U3885LB39YTQ",
    category: "web",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "cert-2",
    title: "Server side JavaScript with Node.js",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Mar 2024",
    credentialId: "KH89BFG9YWUZ",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KH89BFG9YWUZ",
    category: "web",
    skills: ["Node.js", "Express"],
  },
  {
    id: "cert-3",
    title: "Building Web Applications in PHP",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Dec 2024",
    credentialId: "EOQ2MPSJVU6K",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EOQ2MPSJVU6K",
    category: "web",
    skills: ["PHP", "Web Development"],
  },
  {
    id: "cert-4",
    title: "Cloud Computing",
    issuer: "NPTEL",
    issuerLogo: nptel,
    date: "Dec 2024",
    credentialId: "NPTEL24CS118S167020189804431902",
    credentialUrl: "#",
    category: "cloud",
    skills: ["Cloud Computing"],
  },
  {
    id: "cert-5",
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Apr 2024",
    credentialId: "KGLB9JCFZG9Y",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KGLB9JCFZG9Y",
    category: "ai",
    skills: ["LLMs", "Generative AI"],
  },
  {
    id: "cert-6",
    title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "May 2024",
    credentialId: "LADQCTXXT23W",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/LADQCTXXT23W",
    category: "ai",
    skills: ["ChatGPT", "DALL-E", "GPT-4"],
  },
  {
    id: "cert-7",
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Apr 2024",
    credentialId: "FH5TSLHQ7PVK",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/FH5TSLHQ7PVK",
    category: "algorithms",
    skills: ["Dynamic Programming", "Greedy Algorithms"],
  },
  {
    id: "cert-8",
    title: "Introduction to Large Language Models",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Feb 2024",
    credentialId: "KJ88SNKAEGT9",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KJ88SNKAEGT9",
    category: "ai",
    skills: ["LLMs", "AI"],
  },
  {
    id: "cert-9",
    title: "ChatGPT Advanced Data Analysis",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Apr 2024",
    credentialId: "5M948ANA7CJH",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/5M948ANA7CJH",
    category: "ai",
    skills: ["Data Analysis", "ChatGPT"],
  },
  // Extra certificates in each category to ensure they all have content
  {
    id: "cert-10",
    title: "Understanding Cloud Fundamentals",
    issuer: "LinkedIn",
    issuerLogo: linkedin,
    date: "Feb 2023",
    credentialId: "",
    credentialUrl: "#",
    category: "cloud",
    skills: ["AWS", "Cloud Computing", "Network Administration"],
  },
  {
    id: "cert-11",
    title: "Introduction to Programming in C",
    issuer: "NPTEL",
    issuerLogo: nptel,
    date: "May 2023",
    credentialId: "NPTEL23CS02S3477008903036548",
    credentialUrl: "#",
    category: "algorithms",
    skills: ["C", "Programming", "Data Structures"],
  },
  {
    id: "cert-12",
    title: "Approximation Algorithms and Linear Programming",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Apr 2024",
    credentialId: "XVGKA9DGV99W",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/XVGKA9DGV99W",
    category: "algorithms",
    skills: ["Algorithms", "Linear Programming", "Optimization"],
  },
  {
    id: "cert-13",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    issuerLogo: coursera,
    date: "Feb 2024",
    credentialId: "EMZUQXNELP6G",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EMZUQXNELP6G",
    category: "cloud",
    skills: ["Computer Networking", "Cloud Infrastructure"],
  }
];

export { services, technologies, experiences, testimonials, projects, certifications };
