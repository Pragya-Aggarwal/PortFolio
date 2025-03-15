import { useColorMode } from "../../Store/useColorMode";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import Resume from "../../assets/PDF/3+ yearsExperience reactjs.pdf";

const Home = () => {
  const { colorMode } = useColorMode();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume; // Replace with your PDF URL
    link.download = "resume.pdf"; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box mt={"8rem"}>
      <Box>
        <Heading color={colorMode ? "gray.800" : "gray.100"} size={"5xl"}>
          Hi, I'm Pragya Aggarwal
        </Heading>
        <Heading color={colorMode ? "gray.800" : "gray.100"} size={"3xl"}>
          <Typewriter
            options={{
              strings: ["Frontend Developer", "React Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
      </Box>
      <Box my={5}>
        <Text color={colorMode ? "gray.800" : "gray.100"}>
          I am a passionate web developer with over 3+ years of experience in
          programming and internet technologies.I'm actively seeking job
          opportunities where I can contribute and grow.
        </Text>

        <Flex align={"center"} my={5}>
          <GoDotFill color="Blue" />
          <Text ml={2} color={colorMode ? "gray.800" : "gray.100"}>
            Available for new projects
          </Text>
        </Flex>
      </Box>
      <Flex m={10} gap={8}>
        <Button
          rounded="full"
          color={colorMode ? "gray.800" : "gray.100"}
          variant="outline"
          size="xl"
          _hover={{ bg: !colorMode ? "gray.800" : "gray.100" }}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
        <a href="#contactMe">
          <Button
            color={colorMode ? "gray.800" : "gray.100"}
            size="xl"
            variant="plain"
          >
            Let's connect <FaArrowRight />
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default Home;
