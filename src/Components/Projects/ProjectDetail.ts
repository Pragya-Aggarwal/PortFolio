import { adminImage, audit, mifinLos, notion, posvImage } from "../../assets";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  year: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Notion Clone",
    description:
      "The project involves designing and developing a user interface using React.js and Bootstrap to create a modern, and visually appealing web application. The UI will feature a clean, intuitive layout that adapts seamlessly to different screen sizes, ensuring optimal user experience across devices.",
    imageUrl: notion,
    tags: ["React", "Bootstrap"],
    githubUrl: "#",
    year: "2024",
    live: "https://fluffy-narwhal-722178.netlify.app/",
  },
  {
    title: "POSV",
    description:
      "Developed a KYC (Know Your Customer) verification module leveraging FaceMesh and TensorFlow to enhance user authentication and fraud prevention. The system performs live video analysis to detect face visibility and recognize emotions, ensuring a robust identity verification process.",
    imageUrl: posvImage,
    tags: ["React", "TensorFlow", "FaceMesh", "Bootstrap"],
    // githubUrl: "#",
    year: "2021-2023",
  },
  {
    title: "ADMIN PORTAL",
    description:
      "Worked as a Software Developer, specializing in end-to-end web development of frontend applications and user interfaces, ensuring seamless user experiences and robust system performance.",
    imageUrl: adminImage,
    tags: ["React", "Redux", "Bootstrap"],
    // githubUrl: "#",
    year: "2021-2023",
  },
  {
    title: "BRANCH AUDIT",
    description:
      "Developed a role-based web application with a type-safe frontend using React, TypeScript, React Query, Zustand, and Chakra UI to ensure efficient state management and responsive UI design.",
    imageUrl: audit,
    tags: [
      "React",
      "Typescript",
      "ChakraUI",
      "Yup Validation",
      "Zustand",
      "useForm",
      "vite",
    ],
    // githubUrl: "#",
    year: "2023-2024",
  },
  {
    title: "Mifin LOS",
    description:
      "Developed a loan management system enabling users to book loans, check statuses, and process disbursements with role-based access for Maker and Author. Integrated EKYC for document upload with BASE64 encoding, enforcing file type and size restrictions for secure data handling.",
    imageUrl: mifinLos,
    tags: [
      "React",
      "Typescript",
      "ChakraUI",
      "Yup Validation",
      "Zustand",
      "useForm",
      "vite",
    ],
    // githubUrl: "#",
    year: "2023-2024",
  },
  {
    title: "Mifin CFSS",
    description:
      "Implemented user authentication via mobile number with OTP verification, ensuring secure login and access. Developed a payment system that allows users to deposit funds seamlessly, optimized for mobile devices using media queries to ensure responsiveness and a smooth user experience across various screen sizes.",
    imageUrl: adminImage,
    tags: [
      "React",
      "Typescript",
      "ChakraUI",
      "Yup Validation",
      "Zustand",
      "useForm",
      "vite",
    ],
    // githubUrl: "#",
    year: "2024",
  },
];
