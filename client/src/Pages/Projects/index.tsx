import React, { Component } from "react";
import { Box, Button, Layer, Spinner, Text } from "grommet";
import { updateProjectContent, getProjects } from "../../Api";
import { IProject, STATUS_SUCCESS } from "../../Configs";
import { ProjectForm } from "../../Components";

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
                      <ProjectForm
                        key={projectIndex}
                        description={description}
                        repoLink={repoLink}
                        thumbnail={thumbnail}
                        title={title}
                        projectIndex={projectIndex}
                        segmentIndex={segmentIndex}
                        handleChangeByKey={this.handleChangeByKey}
                      />
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
