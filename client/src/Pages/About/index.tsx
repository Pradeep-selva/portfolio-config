import React, { Component } from "react";
import { Box, Button, Layer, Spinner, Text, TextArea } from "grommet";
import { getAboutContent, updateAboutContent } from "../../Api";
import { STATUS_SUCCESS } from "../../Configs";

interface IState {
  description: string;
  skills: Array<string>;
  loading: boolean;
  showToast: boolean;
}

class About extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      description: "",
      skills: [],
      loading: false,
      showToast: false
    };
  }

  componentDidMount() {
    this.toggleLoading();
    getAboutContent()
      .then(({ data: { description, skills }, statusCode }) => {
        if (statusCode === STATUS_SUCCESS)
          this.setState({
            description,
            skills
          });
      })
      .catch(console.log)
      .finally(() => this.toggleLoading());
  }

  handleUpdate = () => {
    const payload = {
      description: this.state.description,
      skills: this.state.skills
    };

    this.toggleLoading();

    updateAboutContent(payload)
      .then(({ statusCode }) => {
        if (statusCode === STATUS_SUCCESS) {
          this.openToast();
          setTimeout(() => this.closeToast(), 1000);
        }
      })
      .catch(console.log)
      .finally(() => this.toggleLoading());
  };

  openToast = () => this.setState({ showToast: true });

  closeToast = () => this.setState({ showToast: false });

  toggleLoading = () =>
    this.setState((prevState: IState) => ({
      loading: !prevState.loading
    }));

  render() {
    const { description, skills, loading, showToast } = this.state;

    return (
      <Box
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ height: "100%" }}
      >
        {loading ? (
          <Spinner size={"xlarge"} color={"#005555"} />
        ) : (
          <React.Fragment>
            <Text size={"xlarge"} margin={{ vertical: "small" }}>
              Description
            </Text>
            <TextArea
              style={{ maxWidth: "40%", height: "5rem" }}
              value={description}
              onChange={(event) =>
                this.setState({
                  description: event.target.value
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
              onClick={this.handleUpdate}
            />
          </React.Fragment>
        )}
        {showToast && (
          <Layer
            onEsc={this.closeToast}
            onClickOutside={this.closeToast}
            style={{ padding: "2rem" }}
          >
            <Text size={"large"}>Successfully updated!</Text>
          </Layer>
        )}
      </Box>
    );
  }
}

export default About;
