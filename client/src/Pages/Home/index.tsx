import { Box, Button, Nav, Sidebar } from "grommet";
import { Logout } from "grommet-icons";
import React, { Component } from "react";

export class Home extends Component {
  render() {
    const tabs = ["About", "Projects", "Experience"];
    return (
      <Box direction={"row"}>
        <Sidebar
          style={{ height: "100vh", backgroundColor: "#005555" }}
          background='brand'
          round='small'
          footer={<Button icon={<Logout />} hoverIndicator />}
        >
          <Nav gap='small'>
            {tabs.map((tab) => (
              <Button
                key={tab}
                size={"large"}
                label={tab}
                hoverIndicator={false}
                style={{ border: 0 }}
              />
            ))}
          </Nav>
        </Sidebar>
      </Box>
    );
  }
}

export default Home;
