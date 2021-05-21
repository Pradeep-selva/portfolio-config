import { Box } from "grommet";
import React from "react";
import { Routes } from "../Routes";
import SideNav from "../Components/SideNav";
import { isLoggedIn } from "../Configs";

const PageContent = () => (
  <Box direction={"row"}>
    {isLoggedIn() && <SideNav />}
    <Box style={{ flex: 1 }}>
      <Routes />
    </Box>
  </Box>
);

export default PageContent;
