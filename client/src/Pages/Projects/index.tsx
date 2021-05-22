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
import { updateProjectContent, getProjects } from "../../Api";
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

  handleChangeByKey = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
    key: keyof IProject
  ) => {
    const projects = this.state.projects;

    projects[index] = {
      ...projects[index],
      [key]: event.target.value
    };

    this.setState({ projects });
  };

  handleUpdate = () => {
    this.toggleLoading();

    updateProjectContent(this.state.projects)
      .then(({ statusCode }) => {
        if (statusCode === STATUS_SUCCESS) {
          this.openToast();
          setTimeout(() => this.closeToast(), 1000);
        }
      })
      .catch(console.log)
      .finally(() => this.toggleLoading());
  };

  getIndex = (segment: number, project: number) =>
    segment ? 3 + project : project;

  openToast = () => this.setState({ showToast: true });

  closeToast = () => this.setState({ showToast: false });

  toggleLoading = () =>
    this.setState((prevState: IState) => ({
      loading: !prevState.loading
    }));

  render() {
    const { loading, projects, showToast } = this.state;

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
            {[projects.slice(0, 3), projects.slice(3, 6)].map(
              (segment, segmentIndex) => (
                <Box direction={"row"} key={segmentIndex}>
                  {segment.map(
                    (
                      { description, repoLink, thumbnail, title },
                      projectIndex
                    ) => (
                      <Box
                        key={projectIndex}
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
                        <TextInput
                          placeholder={"Title"}
                          value={title}
                          onChange={(event) =>
                            this.handleChangeByKey(
                              event,
                              this.getIndex(segmentIndex, projectIndex),
                              "title"
                            )
                          }
                        />
                        <TextInput
                          placeholder={"Thumbnail"}
                          value={thumbnail}
                          onChange={(event) =>
                            this.handleChangeByKey(
                              event,
                              this.getIndex(segmentIndex, projectIndex),
                              "thumbnail"
                            )
                          }
                        />
                        <TextInput
                          placeholder={"Repo Link"}
                          value={repoLink}
                          onChange={(event) =>
                            this.handleChangeByKey(
                              event,
                              this.getIndex(segmentIndex, projectIndex),
                              "repoLink"
                            )
                          }
                        />
                        <TextArea
                          style={{ height: "5rem" }}
                          value={description}
                          onChange={(event) =>
                            this.handleChangeByKey(
                              event,
                              this.getIndex(segmentIndex, projectIndex),
                              "description"
                            )
                          }
                        />
                      </Box>
                    )
                  )}
                </Box>
              )
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

export default Projects;
