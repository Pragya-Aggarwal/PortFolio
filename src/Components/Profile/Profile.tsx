import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { codingGirl } from "../../assets";

const Profile = () => {
  return (
    <Box mt={"50px"}>
      <Image src={codingGirl} alt="coding-girl" h={"400px"} />
    </Box>
  );
};

export default Profile;
