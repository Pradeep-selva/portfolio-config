import { Button, Layer } from "grommet";
import { Logout } from "grommet-icons";
import React from "react";
import { useHistory } from "react-router";
import { RouteAuthKey } from "../../Configs";

const NavLogout = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem(RouteAuthKey);
    history.go(0);
  };

  return (
    <React.Fragment>
      <Button icon={<Logout />} onClick={() => setShow(true)} hoverIndicator />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          style={{ padding: "2rem" }}
        >
          <Button label={"confirm logout"} onClick={handleLogout} />
          <Button
            label={"cancel"}
            onClick={() => setShow(false)}
            style={{ marginTop: "1rem" }}
          />
        </Layer>
      )}
    </React.Fragment>
  );
};

export default NavLogout;
