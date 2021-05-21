import { Box, Button, Text, TextArea } from "grommet";
import React, { Component } from "react";

interface IState {
  about: string;
  skills: Array<string>;
}

class About extends Component<IState, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      about: "",
      skills: []
    };
  }

  render() {
    const { about, skills } = this.state;
    return (
      <Box
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ height: "100%" }}
      >
        <Text size={"xlarge"} margin={{ vertical: "small" }}>
          About
        </Text>
        <TextArea
          style={{ maxWidth: "40%", height: "5rem" }}
          value={about}
          onChange={(event) =>
            this.setState({
              about: event.target.value
            })
          }
        />
        <Text size={"xlarge"} margin={{ vertical: "small" }}>
          Skills
        </Text>
        <TextArea
          style={{ maxWidth: "40%", height: "5rem" }}
          value={skills.join(", ")}
          onChange={(event) =>
            this.setState({
              skills: event.target.value.split(", ")
            })
          }
        />
        <Button
          primary
          margin={{ vertical: "medium" }}
          label={"update"}
          style={{
            maxWidth: "20%",
            backgroundColor: "#005555",
            border: 0
          }}
          onClick={() => console.log("submit")}
        />
      </Box>
    );
  }
}

export default About;
