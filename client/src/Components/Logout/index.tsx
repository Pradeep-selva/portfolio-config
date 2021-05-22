import React from "react";
import { Box, Button, Text } from "grommet";
import { useHistory } from "react-router";
import { RouteNames } from "../../Configs";
import { secrets } from "../../secrets";

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem(secrets.authKey);
    history.push(RouteNames.login);
    history.go(0);
  };

  return (
    <Box align={"center"} justify={"center"}>
      <Text size={"larger"} margin={{ vertical: "medium" }}>
        You are authenticated!
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
