// import { useColorMode } from "../../Store/useColorMode.ts";
// import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
// import Typewriter from "typewriter-effect";
// import { GoDotFill } from "react-icons/go";
// import { FaArrowRight } from "react-icons/fa";
// import Resume from "../../assets/PDF/3+ yearsExperience reactjs.pdf";
// import { hello } from "../../assets";

// const Home = () => {
//   const { colorMode } = useColorMode();
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = Resume; // Replace with your PDF URL
//     link.download = "resume.pdf"; // File name for download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box mt={"4rem"}>
//       <Box>
//         <Flex justifyContent={"center"}>
//           <Image src={hello} alt="hello" w={"100px"} h={"100px"} />
//         </Flex>
//         <Heading color={colorMode ? "#014f4f" : "gray.100"} size={"5xl"}>
//           Hi, I'm Pragya Aggarwal
//         </Heading>
//         <Heading color={colorMode ? "#014f4f" : "gray.100"} size={"3xl"}>
//           <Typewriter
//             options={{
//               strings: ["Frontend Developer", "React Developer"],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </Heading>
//       </Box>
//       <Box my={5}>
//         <Text color={colorMode ? "#014f4f" : "gray.100"}>
//           I am a passionate web developer with over 3+ years of experience in
//           programming and internet technologies.I'm actively seeking job
//           opportunities where I can contribute and grow.
//         </Text>

//         <Flex align={"center"} my={5}>
//           <GoDotFill color="Blue" />
//           <Text ml={2} color={colorMode ? "#014f4f" : "gray.100"}>
//             Available for new projects
//           </Text>
//         </Flex>
//       </Box>
//       <Flex m={10} gap={8}>
//         <Button
//           rounded="full"
//           color={colorMode ? "#014f4f" : "gray.100"}
//           variant="outline"
//           size="xl"
//           _hover={{
//             bg: colorMode ? "#014f4f" : "gray.100",
//             color: !colorMode ? "#014f4f" : "gray.100",
//           }}
//           onClick={handleDownload}
//         >
//           Download Resume
//         </Button>
//         <a href="#contactMeFooter">
//           <Button
//             color={colorMode ? "#014f4f" : "gray.100"}
//             size="xl"
//             variant="plain"
//           >
//             Let's connect <FaArrowRight />
//           </Button>
//         </a>
//       </Flex>
//     </Box>
//   );
// };

// export default Home;
import { useColorMode } from "../../Store/useColorMode.ts";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import Resume from "../../assets/PDF/3+ yearsExperience reactjs.pdf";
import { hello } from "../../assets";

const Home = () => {
  const { colorMode } = useColorMode();

  // Resume Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Pragya_Aggarwal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box mt={{ base: "2rem", md: "4rem" }} textAlign="center">
      <Flex justifyContent="center">
        <Image
          src={hello}
          alt="Hello"
          w={{ base: "80px", md: "100px" }}
          h={{ base: "80px", md: "100px" }}
        />
      </Flex>

      {/* Heading */}
      <Heading
        color={colorMode ? "#014f4f" : "gray.100"}
        size={{ base: "2xl", md: "5xl" }}
      >
        Hi, I'm Pragya Aggarwal
      </Heading>
      <Heading
        color={colorMode ? "#014f4f" : "gray.100"}
        size={{ base: "lg", md: "3xl" }}
      >
        <Typewriter
          options={{
            strings: ["Frontend Developer", "React Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </Heading>

      {/* Description */}
      <Box my={5}>
        <Text
          color={colorMode ? "#014f4f" : "gray.100"}
          fontSize={{ base: "sm", md: "lg" }}
        >
          I am a passionate web developer with over 3+ years of experience in
          programming and web technologies. I'm actively seeking job
          opportunities where I can contribute and grow.
        </Text>

        <Flex align="center" justify="center" my={5}>
          <GoDotFill color="blue" />
          <Text ml={2} color={colorMode ? "#014f4f" : "gray.100"}>
            Available for new projects
          </Text>
        </Flex>
      </Box>

      {/* Buttons */}
      <Flex gap={{ base: 4, md: 8 }} justify="center" flexWrap="wrap">
        <Button
          rounded="full"
          color={colorMode ? "#014f4f" : "gray.100"}
          variant="outline"
          _hover={{
            bg: colorMode ? "#014f4f" : "gray.100",
            color: !colorMode ? "#014f4f" : "gray.100",
          }}
          onClick={handleDownload}
          size={{ base: "sm", md: "lg" }}
        >
          Download Resume
        </Button>
        <a href="#contactMeFooter">
          <Button colorScheme="teal" size={{ base: "sm", md: "lg" }}>
            Let's connect <FaArrowRight />
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default Home;
