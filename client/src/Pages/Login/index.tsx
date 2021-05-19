import { Box, Heading, Keyboard, Text, TextInput } from "grommet";
import { UserAdmin } from "grommet-icons";
import { styles } from "./styles";
import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = () => {
    if (password === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem("isAdmin", "1");
      setError(false);
    } else {
      setError(true);
    }
  };

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
      <Keyboard onEnter={handleSubmit}>
        <TextInput
          onChange={handleChange}
          value={password}
          style={{ ...styles.shadowedInput, textAlign: "center" }}
          type={"password"}
        />
      </Keyboard>
      {!!error && (
        <Text
          size={"large"}
          color={"status-critical"}
          margin={{ vertical: "medium" }}
        >
          Wrong credentials
        </Text>
      )}
    </Box>
  );
};

export default Login;
