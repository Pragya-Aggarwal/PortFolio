import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  VStack,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import {
  LuX,
  LuStretchHorizontal,
  LuSunMedium,
  LuMoonStar,
} from "react-icons/lu";
import {
  FaProjectDiagram,
  FaUser,
  FaBlogger,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";
import { useColorMode } from "../../Store/useColorMode";
import { blackLogo, whiteLogo } from "../../assets";

const Sidebar = (props) => {
  const { isOpen, setIsOpen } = props;
  // const { colorMode, toggleColorMode } = useColorMode();
  const { colorMode, setChangeColorMode } = useColorMode();
  //   const bg = useColorModeValue("gray.100", "gray.900");
  //   const textColor = useColorModeValue("gray.800", "white");

  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w={isOpen ? "250px" : "80px"}
        h="211vw"
        bg={colorMode ? "gray.100" : "gray.900"}
        boxShadow="lg"
        transition="width 0.3s ease"
        position="fixed"
      >
        {/* Sidebar Header */}
        <Flex px={4} pt={4} justify={"space-between"} align="center">
          {isOpen ? (
            <>
              <a href="#">
                <Image
                  w={"35px"}
                  h={"76px"}
                  src={!colorMode ? whiteLogo : blackLogo}
                  alt={"whiteLogo"}
                />
              </a>
              <IconButton
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                color={colorMode ? "gray.800" : "white"}
                _hover={{ bg: !colorMode ? "gray.800" : "white" }}
              >
                <LuX />
              </IconButton>
            </>
          ) : (
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              color={colorMode ? "gray.800" : "white"}
              _hover={{ bg: !colorMode ? "gray.800" : "white" }}
            >
              <LuStretchHorizontal />
            </IconButton>
          )}
        </Flex>

        {/* Sidebar Links */}
        <VStack spacing={6} align="stretch" mt={4}>
          <NavItem
            icon={FaProjectDiagram}
            text="Projects"
            href="#myProject"
            isOpen={isOpen}
            colorMode={colorMode}
          />
          <NavItem
            icon={FaShieldAlt}
            text="My Skills"
            href={"#mySkill"}
            isOpen={isOpen}
            colorMode={colorMode}
          />
          <NavItem
            icon={FaBlogger}
            text="Blog"
            isOpen={isOpen}
            colorMode={colorMode}
          />
          <NavItem
            icon={FaEnvelope}
            text="Contact Me"
            href="#contactMe"
            isOpen={isOpen}
            colorMode={colorMode}
          />
          <Flex align="center">
            {colorMode ? (
              <IconButton
                variant="ghost"
                color={colorMode ? "gray.800" : "white"}
                onClick={() => setChangeColorMode(!colorMode)}
                _hover={{ bg: !colorMode ? "gray.800" : "white" }}
              >
                <LuSunMedium />
              </IconButton>
            ) : (
              <IconButton
                variant="ghost"
                color={colorMode ? "gray.800" : "white"}
                onClick={() => setChangeColorMode(!colorMode)}
                _hover={{ bg: !colorMode ? "gray.800" : "white" }}
              >
                <LuMoonStar />
              </IconButton>
            )}
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

// Sidebar Item Component
const NavItem = ({ icon: Icon, text, isOpen, colorMode, href }) => (
  <Link href="#" style={{ textDecoration: "none" }}>
    <a href={href}>
      <Flex align="center" p={3}>
        <Icon size={20} style={{ color: colorMode ? "#1A202C" : "#FFFFFF" }} />
        {isOpen && (
          <Text ml={4} color={colorMode ? "gray.800" : "white"}>
            {text}
          </Text>
        )}
      </Flex>
    </a>
  </Link>
);

export default Sidebar;
