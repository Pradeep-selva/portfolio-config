import { Box, TextArea, TextInput } from "grommet";
import React from "react";

interface IProps {
  projectIndex: number;
  segmentIndex: number;
  thumbnail: string;
  title: string;
  repoLink: string;
  description: string;
  handleChangeByKey: Function;
}

const ProjectForm = ({
  projectIndex,
  segmentIndex,
  thumbnail,
  title,
  repoLink,
  description,
  handleChangeByKey
}: IProps) => {
  const getIndex = (segment: number, project: number) =>
    segment ? 3 + project : project;

  return (
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
      <TextInput
        placeholder={"Title"}
        value={title}
        onChange={(event) =>
          handleChangeByKey(
            event,
            getIndex(segmentIndex, projectIndex),
            "title"
          )
        }
      />
      <TextInput
        placeholder={"Thumbnail"}
        value={thumbnail}
        onChange={(event) =>
          handleChangeByKey(
            event,
            getIndex(segmentIndex, projectIndex),
            "thumbnail"
          )
        }
      />
      <TextInput
        placeholder={"Repo Link"}
        value={repoLink}
        onChange={(event) =>
          handleChangeByKey(
            event,
            getIndex(segmentIndex, projectIndex),
            "repoLink"
          )
        }
      />
      <TextArea
        style={{ height: "5rem" }}
        value={description}
        onChange={(event) =>
          handleChangeByKey(
            event,
            getIndex(segmentIndex, projectIndex),
            "description"
          )
        }
      />
    </Box>
  );
};

export default ProjectForm;
