// import {
//   Box,
//   Button,
//   Grid,
//   GridItem,
//   Image,
//   Text,
//   Badge,
//   IconButton,
//   Flex,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import { projects } from "./ProjectDetail.ts";
// import { useColorMode } from "../../Store/useColorMode.ts";
// import { motion } from "framer-motion";

// const MotionBox = motion(GridItem);

// const ProjectsPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [expanded, setExpanded] = useState<Record<number, boolean>>({});
//   const projectsPerPage = 3;
//   const { colorMode } = useColorMode();

//   const toggleShowMore = (index: number) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const nextProjects = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + projectsPerPage < projects.length
//         ? prevIndex + projectsPerPage
//         : prevIndex
//     );
//   };

//   const prevProjects = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - projectsPerPage >= 0 ? prevIndex - projectsPerPage : 0
//     );
//   };

//   return (
//     <Box p={10} color={colorMode ? "#014f4f" : "gray.100"} id="myProject">
//       <Text
//         fontSize="3xl"
//         fontWeight="bold"
//         mb={4}
//         textAlign="center"
//         color={colorMode ? "#014f4f" : "gray.100"}
//       >
//         🛠️ Projects
//       </Text>
//       <Grid
//         templateColumns="repeat(3, 1fr)"
//         gap={6}
//         justifyContent="flex-start"
//         color={colorMode ? "white" : "gray.100"}
//       >
//         {projects
//           .slice(currentIndex, currentIndex + projectsPerPage)
//           .map((project, index) => {
//             const isExpanded = expanded[index] || false;

//             return (
//               <MotionBox
//                 key={index}
//                 bg={!colorMode ? "gray.800" : "#014f4f"}
//                 p={5}
//                 borderRadius="lg"
//                 boxShadow="lg"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Image
//                   h={"200px"}
//                   src={project?.imageUrl}
//                   alt={project?.title}
//                   borderRadius="md"
//                   mb={4}
//                 />
//                 <Text
//                   fontSize="xl"
//                   fontWeight="bold"
//                   textAlign="center"
//                   color={colorMode ? "yellow.300" : "gray.100"}
//                 >
//                   {project.title}
//                 </Text>
//                 <Box mt={2}>
//                   {project.tags.map((tag, i) => (
//                     <Badge
//                       key={i}
//                       bg={colorMode ? "#0f3132" : "gray.100"}
//                       color={!colorMode ? "#014f4f" : "gray.100"}
//                       mr={2}
//                     >
//                       {tag}
//                     </Badge>
//                   ))}
//                 </Box>

//                 {/* <Text fontSize="sm" color="gray.400" mt={2}>
//                   {isExpanded
//                     ? project.description
//                     : `${project.description.slice(0, 200)}...`}
//                 </Text>

//                 {project?.description?.length > 200 && (
//                   <Text
//                     fontSize="sm"
//                     color="blue.400"
//                     cursor="pointer"
//                     mt={1}
//                     onClick={() => toggleShowMore(index)}
//                   >
//                     {isExpanded ? "Show Less" : "Show More"}
//                   </Text>
//                 )} */}
//                 <Text fontSize="sm" color="gray.400" mt={2}>
//                   {project.description.length > 200 ? (
//                     <>
//                       {isExpanded
//                         ? project.description
//                         : `${project.description.slice(0, 200)}`}
//                       <Text
//                         as="span"
//                         color="white"
//                         cursor="pointer"
//                         onClick={() => toggleShowMore(index)}
//                       >
//                         {isExpanded ? " Show Less" : "... Show More"}
//                       </Text>
//                     </>
//                   ) : (
//                     project.description
//                   )}
//                 </Text>

//                 <Flex justifyContent={"space-between"}>
//                   <Text fontSize="sm" mt={2}>
//                     {project.year}
//                   </Text>
//                   <Flex gap={2}>
//                     {project?.githubUrl && (
//                       <IconButton
//                         aria-label="GitHub Link"
//                         bg={!colorMode ? "gray.900" : "#0f3132"}
//                         color="gray.100"
//                       >
//                         <FaGithub />
//                       </IconButton>
//                     )}
//                     {project?.live && (
//                       <a href={project.live} target="_blank">
//                         <IconButton
//                           aria-label="Live Link"
//                           bg={!colorMode ? "gray.900" : "#0f3132"}
//                           color="gray.100"
//                         >
//                           <FaArrowUpRightFromSquare />
//                         </IconButton>
//                       </a>
//                     )}
//                   </Flex>
//                 </Flex>
//               </MotionBox>
//             );
//           })}
//       </Grid>
//       <Box mt={5} display="flex" justifyContent="space-between" gap={4}>
//         <Button
//           onClick={prevProjects}
//           background={colorMode ? "#014f4f" : "gray.800"}
//         >
//           <FaArrowLeft /> Prev
//         </Button>
//         <Button
//           background={colorMode ? "#014f4f" : "gray.800"}
//           onClick={nextProjects}
//         >
//           Next <FaArrowRight />
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectsPage;
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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "./ProjectDetail.ts";
import { useColorMode } from "../../Store/useColorMode.ts";
import { motion } from "framer-motion";

const MotionBox = motion(GridItem);

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const projectsPerPage = 3;
  const { colorMode } = useColorMode();

  const toggleShowMore = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
    <Box p={6} color={colorMode ? "#014f4f" : "gray.100"} id="myProject">
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        mb={4}
        textAlign="center"
        color={colorMode ? "#014f4f" : "gray.100"}
      >
        🛠️ Projects
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
        justifyContent="center"
      >
        {projects
          .slice(currentIndex, currentIndex + projectsPerPage)
          .map((project, index) => {
            const isExpanded = expanded[index] || false;

            return (
              <MotionBox
                key={index}
                bg={!colorMode ? "gray.800" : "#014f4f"}
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
                  h={{ base: "150px", md: "200px" }}
                  src={project?.imageUrl}
                  alt={project?.title}
                  borderRadius="md"
                  mb={4}
                  objectFit="cover"
                  w="100%"
                />
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  textAlign="center"
                  color={colorMode ? "yellow.300" : "gray.100"}
                >
                  {project.title}
                </Text>
                <Box mt={2} display="flex" flexWrap="wrap">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      bg={colorMode ? "#0f3132" : "gray.100"}
                      color={!colorMode ? "#014f4f" : "gray.100"}
                      mr={2}
                      mb={1}
                    >
                      {tag}
                    </Badge>
                  ))}
                </Box>
                <Text fontSize="sm" color="gray.400" mt={2}>
                  {project.description.length > 200 ? (
                    <>
                      {isExpanded
                        ? project.description
                        : `${project.description.slice(0, 200)}`}
                      <Text
                        as="span"
                        color="white"
                        cursor="pointer"
                        onClick={() => toggleShowMore(index)}
                      >
                        {isExpanded ? " Show Less" : "... Show More"}
                      </Text>
                    </>
                  ) : (
                    project.description
                  )}
                </Text>
                <Flex justifyContent="space-between" alignItems="center" mt={3}>
                  <Text fontSize="sm">{project.year}</Text>
                  <Flex gap={2}>
                    {project?.githubUrl && (
                      <IconButton
                        aria-label="GitHub Link"
                        bg={!colorMode ? "gray.900" : "#0f3132"}
                        color="gray.100"
                      >
                        <FaGithub />
                      </IconButton>
                    )}
                    {project?.live && (
                      <a href={project.live} target="_blank">
                        <IconButton
                          aria-label="Live Link"
                          bg={!colorMode ? "gray.900" : "#0f3132"}
                          color="gray.100"
                        >
                          <FaArrowUpRightFromSquare />
                        </IconButton>
                      </a>
                    )}
                  </Flex>
                </Flex>
              </MotionBox>
            );
          })}
      </Grid>
      <Box mt={5} display="flex" justifyContent="space-between" gap={4}>
        <Button
          onClick={prevProjects}
          background={colorMode ? "#014f4f" : "gray.800"}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft /> Prev
        </Button>
        <Button
          background={colorMode ? "#014f4f" : "gray.800"}
          onClick={nextProjects}
          disabled={currentIndex + projectsPerPage >= projects.length}
        >
          Next <FaArrowRight />
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
