import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home.tsx";
import Sidebar from "./Components/SideBar/SideBar.tsx";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "./Store/useColorMode.ts";
import Profile from "./Components/Profile/Profile.tsx";
import ProjectsPage from "./Components/Projects/Projects.tsx";
import SkillsPage from "./Components/Skills/Skills.tsx";
import ParticlesBackground from "./Components/Home/ParticlesBackground.tsx";
import ExperiencePage from "./Components/Experience/Experience.tsx";
import EducationPage from "./Components/Education/Education.tsx";
import ContactMeFooter from "./Components/Contact/ContactMeFooter.tsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode ? "#b0f3f6" : "gray.900"} minH="100vh">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Box
        ml={{ base: "0", md: isOpen ? "260px" : "90px" }}
        transition="margin 0.3s ease-in-out"
      >
        <Box position="relative">
          {/* Particles Effect (Only in dark mode) */}
          {!colorMode && <ParticlesBackground />}

          {/* Profile and Home Section */}
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ base: "4", md: "6" }}
            m={{ base: "10px", md: "30px" }}
            mt={{ base: "100px", md: "30px" }}
            p="10px"
            borderRadius="10px"
            border="1px solid grey"
          >
            <GridItem zIndex={100}>
              <Profile />
            </GridItem>

            <GridItem zIndex={100}>
              <Home />
            </GridItem>
          </Grid>
        </Box>

        {/* Other Sections */}
        <ProjectsPage />
        <SkillsPage />
        <ExperiencePage />
        <EducationPage />
        <ContactMeFooter />
      </Box>
    </Box>
  );
}

export default App;
