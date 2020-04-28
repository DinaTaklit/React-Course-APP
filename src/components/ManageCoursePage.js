import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  return (
    <>
      <h2> Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      {props.match.params.slug} {/* TO show the slug placeholder in the link*/}
    </>
  );
};

export default ManageCoursePage;
