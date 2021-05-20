import React from "react";
import { Box, Button, Text } from "grommet";
import { useHistory } from "react-router";
import { RouteAuthKey, RouteNames } from "../../Configs";

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem(RouteAuthKey);
    history.push(RouteNames.login);
    history.go(0);
  };

  return (
    <Box align={"center"} justify={"center"}>
      <Text size={"larger"} margin={{ vertical: "medium" }}>
        You are already authenticated!
      </Text>
      <Button
        primary
        label={"Logout"}
        style={{ maxWidth: "20%" }}
        onClick={handleLogout}
      />
    </Box>
  );
};

export default Logout;
