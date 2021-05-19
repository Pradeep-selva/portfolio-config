import { Box, Heading, TextInput } from "grommet";
import { UserAdmin } from "grommet-icons";
import React from "react";

const Login = () => {
  return (
    <Box
      direction={"column"}
      alignContent={"center"}
      justify={"center"}
      style={{ minHeight: "100vh" }}
    >
      <Box direction={"row"} align={"center"} justify={"center"}>
        <UserAdmin style={{ marginRight: "2rem" }} size={"50px"} />
        <Heading>Login</Heading>
      </Box>
      <TextInput
        style={{
          maxWidth: 700,
          textAlign: "center",
          borderRadius: 100,
          fontSize: "3vw",
          border: 0,
          boxShadow: "1px 4px 74px -16px rgba(0,0,0,0.62)"
        }}
      />
    </Box>
  );
};

export default Login;
