import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { DiMaterializecss, DiNpm } from "react-icons/di";
import { SiTypescript, SiRedux, SiBabel } from "react-icons/si";
import { useColorMode } from "../../Store/useColorMode.ts";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, bg: "orange.500", experience: "2+ years" },
  { name: "CSS", icon: <FaCss3Alt />, bg: "blue.500", experience: "2+ years" },
  { name: "JavaScript", icon: <FaJs />, bg: "yellow.500", experience: "3+ years" },
  { name: "ReactJS", icon: <FaReact />, bg: "teal.500", experience: "3+ years" },
  { name: "Chakra UI", icon: <FaReact />, bg: "purple.500", experience: "1+ year" },
  { name: "Material UI", icon: <DiMaterializecss />, bg: "green.500", experience: "2+ years" },
  { name: "GIT", icon: <FaGithub />, bg: "black", experience: "3+ years" },
  { name: "NPM", icon: <DiNpm />, bg: "red.500", experience: "3+ years" },
  { name: "TypeScript", icon: <SiTypescript />, bg: "blue.600", experience: "1+ year" },
  { name: "Babel", icon: <SiBabel />, bg: "yellow.600", experience: "1+ year" },
  { name: "Redux", icon: <SiRedux />, bg: "purple.600", experience: "1+ year" },
];

const SkillsPage = () => {
  const { colorMode } = useColorMode();

  // Responsive adjustments
  const padding = useBreakpointValue({ base: "2rem", md: "4rem" });
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const skillBoxSize = useBreakpointValue({ base: "150px", md: "200px" });
  const skillFontSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Box p={padding} textAlign="center" id="mySkill" color={colorMode ? "#014f4f" : "gray.100"}>
      <Text fontSize={headingSize} fontWeight="bold" mb={4}>
        🚀 Technical Skills
      </Text>
      <Box mb="6rem" overflow="hidden" whiteSpace="nowrap" width="100%" position="relative">
        <motion.div
          style={{
            display: "flex",
            gap: "20px",
            width: "max-content",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 12, repeat: Infinity }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <Box
              key={index}
              p={4}
              bg={skill.bg}
              borderRadius="md"
              boxShadow="md"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              cursor="pointer"
              mr={4}
              minWidth={skillBoxSize}
              height={skillBoxSize}
              transition="transform 0.5 ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Box fontSize="5xl" mb={2}>
                {skill.icon}
              </Box>
              <Text fontSize={skillFontSize} fontWeight="bold">
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
