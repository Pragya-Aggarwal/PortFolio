import { useState } from "react";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/SideBar/SideBar";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "./Store/useColorMode";
import Profile from "./Components/Profile/Profile";
import ProjectsPage from "./Components/Projects/Projects";
import SkillsPage from "./Components/Skills/Skills";
import ContactForm from "./Components/Contact/ContactMe";
import { nodes } from "./assets";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode ? "gray.100" : "gray.900"} h={"100%"}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Box ml={isOpen ? "260px" : "90px"}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="6"
          m={"30px"}
          p={"10px"}
          borderRadius={"10px"}
          border={"1px solid grey"}
        >
          <GridItem>
            <Profile />
          </GridItem>

          <GridItem>
            <Home />
          </GridItem>
        </Grid>
        <ProjectsPage />
        <SkillsPage />
        <ContactForm />
      </Box>
    </Box>
  );
}

export default App;
