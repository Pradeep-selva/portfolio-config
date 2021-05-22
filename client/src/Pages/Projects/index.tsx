import React, { Component } from "react";
import { Box, Button, Layer, Spinner, Text, TextArea } from "grommet";
import { getAboutContent, getProjects, updateAboutContent } from "../../Api";
import { STATUS_SUCCESS } from "../../Configs";

// interface IState {
//   description: string;
//   skills: Array<string>;
//   loading: boolean;
//   showToast: boolean;
// }

class Projects extends Component {
  //   constructor(props: any) {
  //     super(props);

  //     this.state = {
  //       description: "",
  //       skills: [],
  //       loading: false,
  //       showToast: false
  //     };
  //   }

  componentDidMount() {
    // this.toggleLoading();
    getProjects()
      .then(({ data: { content }, statusCode }) => {
        if (statusCode === STATUS_SUCCESS) console.log(JSON.parse(content));
      })
      .catch(console.log);
    //   .finally(() => this.toggleLoading());
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

  //   openToast = () => this.setState({ showToast: true });

  //   closeToast = () => this.setState({ showToast: false });

  //   toggleLoading = () =>
  //     this.setState((prevState: IState) => ({
  //       loading: !prevState.loading
  //     }));

  render() {
    return (
      <Box
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ height: "100%" }}
      >
        <h1>ok</h1>
      </Box>
    );
  }
}

export default Projects;
