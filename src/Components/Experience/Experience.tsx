import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "../../Store/useColorMode";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Associate Engineering Analyst",
    company: "Qualtech Consultant Pvt. Ltd.",
    duration: "2021 - Present",
    description:
      "Developed dynamic web applications using React.js, integrated with backend APIs, and optimized performance.",
  },

  {
    title: "Frontend Developer Intern",
    company: "Qualtech Consultant Pvt. Ltd.",
    duration: "2021 - 2021",
    description:
      "Collaborated in building a workflow builder using ReactFlow, enhancing functionality and performance.",
  },
];

const ExperiencePage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={8}
      borderRadius="lg"
      color="white"
      maxW="container.xl"
      mx="auto"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text
          fontSize="3xl"
          color={colorMode ? "#014f4f" : "gray.100"}
          fontWeight="bold"
          mb={4}
          textAlign="center"
        >
          💼 Professional Experience
        </Text>
      </motion.div>

      <Stack gap={6}>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <Box
              bg={!colorMode ? "gray.700" : "#014f4f"}
              p={6}
              borderRadius="md"
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.1, duration: 0.3 }}
              >
                <Heading as="h3" size="lg" color="yellow.300">
                  {experience.title}
                </Heading>
                <Text fontSize="md" color={!colorMode ? "gray.400" : "white"}>
                  {experience.company}
                </Text>
                <Text fontSize="sm" color={!colorMode ? "gray.500" : "white"}>
                  {experience.duration}
                </Text>
                <Text
                  mt={4}
                  fontSize="md"
                  color={!colorMode ? "gray.300" : "white"}
                >
                  {experience.description}
                </Text>
              </motion.div>
            </Box>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default ExperiencePage;
