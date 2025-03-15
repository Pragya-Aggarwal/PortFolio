import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { DiMaterializecss, DiNpm } from "react-icons/di";
import { SiTypescript, SiRedux, SiBabel } from "react-icons/si";
import { useColorMode } from "../../Store/useColorMode";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, bg: "orange.500", experience: "2+ years" },
  { name: "CSS", icon: <FaCss3Alt />, bg: "blue.500", experience: "2+ years" },
  {
    name: "JavaScript",
    icon: <FaJs />,
    bg: "yellow.500",
    experience: "3+ years",
  },
  {
    name: "ReactJS",
    icon: <FaReact />,
    bg: "teal.500",
    experience: "3+ years",
  },
  {
    name: "Chakra UI",
    icon: <FaReact />,
    bg: "purple.500",
    experience: "1+ year",
  },
  {
    name: "Material UI",
    icon: <DiMaterializecss />,
    bg: "green.500",
    experience: "2+ years",
  },
  { name: "GIT", icon: <FaGithub />, bg: "black", experience: "3+ years" },
  { name: "NPM", icon: <DiNpm />, bg: "red.500", experience: "3+ years" },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    bg: "blue.600",
    experience: "1+ year",
  },
  { name: "Babel", icon: <SiBabel />, bg: "yellow.600", experience: "1+ year" },
  { name: "Redux", icon: <SiRedux />, bg: "purple.600", experience: "1+ year" },
];

const SkillsPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={"4rem"}
      textAlign="center"
      id="mySkill"
      color={colorMode ? "gray.800" : "gray.100"}
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">
        My Skills
      </Text>
      <Box
        mb={"9rem"}
        overflow="hidden"
        whiteSpace="nowrap"
        width="100%"
        position="relative"
      >
        <motion.div
          style={{
            display: "flex",
            gap: "20px", // Keeps space between items
            width: "max-content", // Prevents wrapping
          }}
          animate={{
            x: ["0%", "-50%"], // Moves half of duplicated list
          }}
          transition={{
            ease: "linear",
            duration: 12, // Adjust speed
            repeat: Infinity, // Continuous loop
          }}
        >
          {/* Render duplicated skills list for smooth looping */}
          {[...skills, ...skills].map((skill, index) => (
            <Box
              key={index}
              p={5}
              bg={skill.bg}
              borderRadius="md"
              boxShadow="md"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              cursor="pointer"
              mr={6}
              minWidth="200px"
              height="250px"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Box fontSize="6xl" mb={2}>
                {skill.icon}
              </Box>
              <Text fontSize="xl" fontWeight="bold">
                {skill.name}
              </Text>
              <Text fontSize="sm">{skill.experience}</Text>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default SkillsPage;
