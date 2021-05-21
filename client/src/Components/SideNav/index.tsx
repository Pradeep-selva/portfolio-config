import { Button, Nav, Sidebar } from "grommet";
import React from "react";
import { useHistory } from "react-router";
import { NavLinks } from "../../Configs/sidenav";
import NavLogout from "../NavLogout";

const SideNav = () => {
  const history = useHistory();

  return (
    <Sidebar
      style={{ height: "100vh", backgroundColor: "#005555" }}
      background='brand'
      round='small'
      footer={<NavLogout />}
    >
      <Nav gap='small'>
        {NavLinks.map(({ link, name }) => (
          <Button
            key={name}
            size={"large"}
            label={name}
            hoverIndicator={false}
            style={{ border: 0 }}
            onClick={() => history.push(link)}
          />
        ))}
      </Nav>
    </Sidebar>
  );
};

export default SideNav;
