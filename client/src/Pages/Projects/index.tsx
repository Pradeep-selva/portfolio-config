import React, { Component } from "react";
import {
  Box,
  Button,
  Layer,
  Spinner,
  Text,
  TextArea,
  TextInput
} from "grommet";
import { getAboutContent, getProjects, updateAboutContent } from "../../Api";
import { IProject, STATUS_SUCCESS } from "../../Configs";

interface IState {
  projects: Array<IProject>;
  loading: boolean;
  showToast: boolean;
}

class Projects extends Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      projects: [],
      loading: false,
      showToast: false
    };
  }

  componentDidMount() {
    this.toggleLoading();
    getProjects()
      .then(({ data: { content }, statusCode }) => {
        if (statusCode === STATUS_SUCCESS)
          this.setState({
            projects: JSON.parse(content)
          });
      })
      .catch(console.log)
      .finally(() => this.toggleLoading());
  }

  //   handleUpdate = () => {
  //     const payload = {
  //       description: this.state.description,
  //       skills: this.state.skills
  //     };

  //     this.toggleLoading();

  //     updateAboutContent(payload)
  //       .then(({ statusCode }) => {
  //         if (statusCode === STATUS_SUCCESS) {
  //           this.openToast();
  //           setTimeout(() => this.closeToast(), 1000);
  //         }
  //       })
  //       .catch(console.log)
  //       .finally(() => this.toggleLoading());
  //   };

  openToast = () => this.setState({ showToast: true });

  closeToast = () => this.setState({ showToast: false });

  toggleLoading = () =>
    this.setState((prevState: IState) => ({
      loading: !prevState.loading
    }));

  render() {
    const { loading, projects } = this.state;
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
          [projects.slice(0, 3), projects.slice(3, 6)].map((segment) => (
            <Box direction={"row"}>
              {segment.map(({ description, repoLink, thumbnail, title }) => (
                <Box
                  direction={"column"}
                  style={{
                    margin: "1rem 1rem",
                    width: "30vw"
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      height: "25vh",
                      background: `url(${thumbnail})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <TextInput placeholder={"Title"} value={title} />
                  <TextInput placeholder={"Thumbnail"} value={thumbnail} />
                  <TextInput placeholder={"Repo Link"} value={repoLink} />
                  <TextArea style={{ height: "5rem" }} value={description} />
                </Box>
              ))}
            </Box>
          ))
        )}
        <Button
          primary
          margin={{ vertical: "medium" }}
          label={"update"}
          style={{
            maxWidth: "20%",
            backgroundColor: "#005555",
            border: 0
          }}
          //   onClick={this.handleUpdate}
        />
      </Box>
    );
  }
}

export default Projects;
