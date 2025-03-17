import {
  Box,
  Flex,
  IconButton,
  VStack,
  Text,
  Link,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  LuX,
  LuStretchHorizontal,
  LuSunMedium,
  LuMoonStar,
} from "react-icons/lu";
import {
  FaProjectDiagram,
  FaEnvelope,
  FaShieldAlt,
  FaUserGraduate,
  FaBars,
} from "react-icons/fa";
import { useColorMode } from "../../Store/useColorMode.ts";
import { whiteLogo } from "../../assets";
import { IconType } from "react-icons/lib";
import { TbUserShield } from "react-icons/tb";

interface NavItemProps {
  icon: IconType;
  text: string;
  isOpen: boolean;
  href: string;
  setIsOpen: any;
}

const Sidebar = (props: any) => {
  const { isOpen, setIsOpen } = props; // Check if isOpen and setIsOpen are passed correctly
  const { colorMode, setChangeColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex>
      {/* Mobile Top Navbar */}
      {isMobile && (
        <Flex
          w="100%"
          h="80px"
          bg={colorMode ? "#014f4f" : "gray.800"}
          align="center"
          justify="space-between"
          px={4}
          position="fixed"
          zIndex={101}
        >
          <a href="#">
            <Image w={"35px"} h={"76px"} src={whiteLogo} alt={"whiteLogo"} />
          </a>
          <HStack>
            <IconButton
              onClick={() => setIsOpen(!isOpen)} // Toggle sidebar
              variant="ghost"
              color={"white"}
              _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
            >
              <FaBars />
            </IconButton>
            <Flex align="center">
              {colorMode ? (
                <IconButton
                  variant="ghost"
                  color={"white"}
                  onClick={() => setChangeColorMode()}
                  _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
                >
                  <LuSunMedium />
                </IconButton>
              ) : (
                <IconButton
                  variant="ghost"
                  color={"white"}
                  onClick={() => setChangeColorMode()}
                  _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
                >
                  <LuMoonStar />
                </IconButton>
              )}
            </Flex>
          </HStack>
        </Flex>
      )}
      {isMobile && isOpen && (
        <Box
          w="100%" // Sidebar width takes full screen when open in mobile
          bg={colorMode ? "#014f4f" : "gray.800"}
          boxShadow="lg"
          position="fixed"
          top="60px"
          zIndex={101}
          h="100%"
          transition="width 0.3s ease"
        >
          <Flex px={4} pt={4} justify={"space-between"} align="center">
            <Box></Box>

            <IconButton
              onClick={() => setIsOpen(!isOpen)} // Toggle sidebar
              variant="ghost"
              color={"white"}
              _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
            >
              <LuX />
            </IconButton>
          </Flex>

          {/* Sidebar Links */}

          <VStack gap={6} align="stretch" mt={4}>
            <NavItem
              icon={FaProjectDiagram}
              text="Projects"
              href="#myProject"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <NavItem
              icon={FaShieldAlt}
              text="My Skills"
              href="#mySkill"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <NavItem
              icon={TbUserShield}
              text="Experience"
              href="#experience"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <NavItem
              icon={FaUserGraduate}
              text="Education"
              href="#education"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <NavItem
              icon={FaEnvelope}
              text="Contact Me"
              href="#contactMeFooter"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </VStack>
        </Box>
      )}
      {/* Sidebar */}
      {/* {(isMobile && isOpen) ||
        (!isMobile && ( */}
      {!isMobile && (
        <Box
          w={
            isOpen && !isMobile ? "250px" : isOpen && isMobile ? "100%" : "80px"
          }
          bg={colorMode ? "#014f4f" : "gray.800"}
          boxShadow="lg"
          transition="width 0.3s ease"
          position="fixed"
          top={isMobile ? "60px" : "0"}
          zIndex={101}
          h={"100%"}
        >
          {/* Sidebar Header */}
          <Flex px={4} pt={4} justify={"space-between"} align="center">
            {isOpen ? (
              <>
                {!isMobile ? (
                  <a href="#">
                    <Image
                      w={"35px"}
                      h={"76px"}
                      src={whiteLogo}
                      alt={"whiteLogo"}
                    />
                  </a>
                ) : (
                  <Box></Box>
                )}

                <IconButton
                  onClick={() => setIsOpen(!isOpen)} // Toggle sidebar
                  variant="ghost"
                  color={"white"}
                  _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
                >
                  <LuX />
                </IconButton>
              </>
            ) : (
              <IconButton
                onClick={() => setIsOpen(!isOpen)} // Toggle sidebar
                variant="ghost"
                ml={-3}
                color={"white"}
                _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
              >
                <LuStretchHorizontal />
              </IconButton>
            )}
          </Flex>

          {/* Sidebar Links */}
          <VStack gap={6} align="stretch" mt={4}>
            <NavItem
              icon={FaProjectDiagram}
              text="Projects"
              href="#myProject"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <NavItem
              icon={FaShieldAlt}
              text="My Skills"
              href="#mySkill"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <NavItem
              icon={TbUserShield}
              text="Experience"
              href="#experience"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <NavItem
              icon={FaUserGraduate}
              text="Education"
              href="#education"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <NavItem
              icon={FaEnvelope}
              text="Contact Me"
              href="#contactMeFooter"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            {!isMobile && (
              <Flex align="center">
                {colorMode ? (
                  <IconButton
                    variant="ghost"
                    color={"white"}
                    onClick={() => setChangeColorMode()}
                    _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
                  >
                    <LuSunMedium />
                  </IconButton>
                ) : (
                  <IconButton
                    variant="ghost"
                    color={"white"}
                    onClick={() => setChangeColorMode()}
                    _hover={{ bg: !colorMode ? "gray.800" : "#2bbbc2" }}
                  >
                    <LuMoonStar />
                  </IconButton>
                )}
              </Flex>
            )}
          </VStack>
        </Box>
      )}
    </Flex>
  );
};

const NavItem = ({
  icon: Icon,
  text,
  isOpen,
  href,
  setIsOpen,
}: NavItemProps) => (
  <Link
    href={href}
    style={{ textDecoration: "none" }}
    onClick={() => setIsOpen(!isOpen)}
  >
    <Flex align="center" p={2} pl={3}>
      <Icon size={20} style={{ color: "#FFFFFF" }} />
      {isOpen && (
        <Text ml={4} color={"white"}>
          {text}
        </Text>
      )}
    </Flex>
  </Link>
);

export default Sidebar;
