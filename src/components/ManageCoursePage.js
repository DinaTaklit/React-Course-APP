import React from "react";

const ManageCoursePage = (props) => {
  debugger;
  return (
    <>
      <h2> Manage Course</h2>
      {props.match.params.slug} {/* TO show the slug placeholder in the link*/}
    </>
  );
};

export default ManageCoursePage;
