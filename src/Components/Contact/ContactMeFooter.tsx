import { Box, IconButton, Link, Flex } from "@chakra-ui/react";
import { FaGithub, FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { useColorMode } from "../../Store/useColorMode";
import { MdLocationOn } from "react-icons/md";
const ContactMeFooter = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      p={4}
      color={!colorMode ? "white" : "#014f4f"}
      textAlign="center"
      id="contactMeFooter"
    >
      <Flex justify="center" gap={4}>
        {/* Phone */}
        <Link href="tel:+917895932714">
          <IconButton
            aria-label="Phone"
            bg="transparent"
            color={!colorMode ? "white" : "#014f4f"}
          >
            <FaPhoneAlt />
          </IconButton>
        </Link>

        {/* Email */}
        <Link href="mailto:pragyaaggarwal1999@gmail.com">
          <IconButton
            aria-label="Email"
            bg="transparent"
            color={!colorMode ? "white" : "#014f4f"}
          >
            <FaEnvelope />
          </IconButton>
        </Link>

        {/* GitHub */}
        <Link href="https://github.com/Pragya-Aggarwal" target="_blank">
          <IconButton
            aria-label="GitHub"
            bg="transparent"
            color={!colorMode ? "white" : "#014f4f"}
          >
            <FaGithub />
          </IconButton>
        </Link>

        {/* Netlify */}
        <Link
          href="https://app.netlify.com/teams/pragya-aggarwal/sites"
          target="_blank"
        >
          <IconButton
            aria-label="Netlify"
            bg="transparent"
            color={!colorMode ? "white" : "#014f4f"}
          >
            <FaGlobe />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/in/pragya-aggarwals/"
          target="_blank"
        >
          <IconButton
            aria-label="Netlify"
            bg="transparent"
            color={!colorMode ? "white" : "#014f4f"}
          >
            <FaLinkedinIn />
          </IconButton>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Rishikesh,+Uttarakhand/@30.087653,78.1882074,12z/data=!3m1!4b1!4m6!3m5!1s0x39093e67cf93f111:0xcc78804a6f941bfe!8m2!3d30.1157619!4d78.2853017!16zL20vMGNjdHZz?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <IconButton
            aria-label="Netlify"
            bg="transparent"
            color={!colorMode ? "white" : "#014f4f"}
          >
            <MdLocationOn />
          </IconButton>
        </Link>
      </Flex>
    </Box>
  );
};

export default ContactMeFooter;
