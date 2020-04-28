import React,  {useState} from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });
  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm course={course}/>
    </>
  );
};

export default ManageCoursePage;
