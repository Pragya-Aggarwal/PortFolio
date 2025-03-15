import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
  Badge,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects } from "./ProjectDetail";
import { useColorMode } from "../../Store/useColorMode";
import { motion } from "framer-motion";

const MotionBox = motion(GridItem);

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const { colorMode } = useColorMode();

  const nextProjects = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage < projects.length
        ? prevIndex + projectsPerPage
        : prevIndex
    );
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - projectsPerPage >= 0 ? prevIndex - projectsPerPage : 0
    );
  };

  return (
    <Box p={10} color={colorMode ? "gray.800" : "gray.100"} id="myProject">
      <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">
        Projects
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        justifyContent="flex-start"
      >
        {projects
          .slice(currentIndex, currentIndex + projectsPerPage)
          .map((project, index) => (
            <MotionBox
              key={index}
              bg={!colorMode ? "gray.800" : "gray.100"}
              p={5}
              borderRadius="lg"
              boxShadow="lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project?.imageUrl}
                alt={project?.title}
                borderRadius="md"
                mb={4}
              />
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                {project.title}
              </Text>
              <Box mt={2}>
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    bg={colorMode ? "gray.800" : "gray.100"}
                    color={!colorMode ? "gray.800" : "gray.100"}
                    mr={2}
                  >
                    {tag}
                  </Badge>
                ))}
              </Box>
              <Text fontSize="sm" mt={2}>
                {project.description}
              </Text>
              <Flex justifyContent={"space-between"}>
                <Text fontSize="sm" mt={2}>
                  {project.year}
                </Text>
                {project?.githubUrl && (
                  <IconButton
                    aria-label="GitHub Link"
                    bg={!colorMode ? "gray.800" : "gray.100"}
                    color={colorMode ? "gray.800" : "gray.100"}
                  >
                    <FaGithub />
                  </IconButton>
                )}
              </Flex>
            </MotionBox>
          ))}
      </Grid>
      <Box mt={5} display="flex" justifyContent="space-between" gap={4}>
        <Button onClick={prevProjects} isDisabled={currentIndex === 0}>
          <FaArrowLeft /> Prev
        </Button>
        <Button
          onClick={nextProjects}
          isDisabled={currentIndex + projectsPerPage >= projects.length}
        >
          Next <FaArrowRight />
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
