import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "../../Store/useColorMode";

// Motion wrapper for animations
const MotionBox = motion(Box);

const educationData = [
  {
    title: "Master's in Computer Applications",
    institution: "IIMT Group of Colleges, Greater Noida",
    year: "2019 - 2022",
    description: "Specialized in Software Development and UI/UX Design.",
  },
  {
    title: "Bachelor's in Computer Science",
    institution: "Doon Institute Group of College, Rishikesh",
    year: "2016 - 2019",
    description:
      "Developed strong foundations in algorithms, data structures, and programming languages.",
  },
  {
    title: "12th Grade (Science)",
    institution: "Saraswati Vidhya Mandir Awas Vikas, Rishikesh",
    year: "2015 - 2016",
    description:
      "Studied Science with a focus on Physics, Chemistry, and Mathematics.",
  },
  {
    title: "10th Grade (Science)",
    institution: "Saraswati Vidhya Mandir Awas Vikas, Rishikesh",
    year: "2013 - 2014",
    description:
      "Completed secondary education with strong academic performance.",
  },
];

const EducationTimeline = () => {
  const { colorMode } = useColorMode();

  return (
    <Box color="white" py={10} px={5} id="education" overflow={"hidden"}>
      <Text
        fontSize="3xl"
        color={colorMode ? "#014f4f" : "gray.100"}
        fontWeight="bold"
        mb={4}
        textAlign="center"
      >
        🎓 My Education Timeline
      </Text>

      <Flex flexDir="column" align="center">
        {educationData.map((edu, index) => (
          <Flex
            key={index}
            w={{ base: "100%", md: "80%" }}
            mb={6}
            justify={index % 2 === 0 ? "flex-start" : "flex-end"}
            position="relative"
          >
            {/* Connector Line */}
            <Box
              position="absolute"
              left={"50%"}
              top="10%"
              h="80%"
              w="2px"
              bg={colorMode ? "#014f4f" : "gray.600"}
              transform="translateX(-50%)"
            />

            {/* Circle Indicator */}
            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              bg="white"
              borderRadius="50%"
              w="12px"
              h="12px"
              border="2px solid #ffcc00"
            />

            {/* Education Details */}
            <MotionBox
              p={5}
              bg={colorMode ? "#014f4f" : "gray.800"}
              borderRadius="md"
              w={{ base: "48%", md: "45%" }}
              textAlign="left"
              boxShadow="lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heading fontSize="lg" mb={2} color="yellow.300">
                {edu.title}
              </Heading>
              <Text fontSize="sm" fontStyle="italic">
                {edu.institution} | {edu.year}
              </Text>
              <Text mt={2}>{edu.description}</Text>
            </MotionBox>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default EducationTimeline;
