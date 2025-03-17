import {
  Box,
  Button,
  Field,
  Input,
  Textarea,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorMode } from "../../Store/useColorMode.ts";

const ContactForm = () => {
  const { colorMode } = useColorMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    window.location.href = `mailto:pragyaaggawal1999@gmail.com?subject=Contact Form&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <Box id="contactMe" color={!colorMode ? "gray.100" : "#014f4f"}>
      <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">
        Contact me
      </Text>
      <Flex p={4} justifyContent={"center"} fontSize={"xl"}>
        <Text>
          If you want to know more about me or my work, send me a message. I'd
          love to hear from you.
        </Text>
      </Flex>
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderRadius="lg"
        bg={colorMode ? "#2bbbc2" : "gray.800"}
        boxShadow="0px 4px 10px rgba(116, 120, 124, 0.3)" // Blue shadow effect
      >
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <Field.Root required mb={4}>
            <Field.Label>
              Name <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Field.ErrorText>Enter your full name.</Field.ErrorText>
          </Field.Root>

          {/* Email Field */}
          <Field.Root required mb={4}>
            <Field.Label>
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Field.ErrorText>We'll never share your email.</Field.ErrorText>
          </Field.Root>

          {/* Message Field */}
          <Field.Root required mb={4}>
            <Field.Label>
              Message <Field.RequiredIndicator />
            </Field.Label>
            <Textarea
              placeholder="Enter your message"
              name="message"
              // rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            <Field.ErrorText>Describe your query in detail.</Field.ErrorText>
          </Field.Root>

          {/* Submit Button */}
          <Button
            type="submit"
            background={colorMode ? "#014f4f" : "black"}
            colorScheme="blue"
            width="full"
          >
            Send Message
          </Button>
        </form>
      </Box>
      {/* Google Map */}
      <Box mt={10} mx={3}>
        <Heading size="md" mb={4}>
          Find Me Here
        </Heading>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.0521805278324!2d78.2676116754658!3d30.085184074872264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390920f66fdc212f%3A0x6dd32c7c2e45dbde!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          // allowFullScreen="true"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default ContactForm;
