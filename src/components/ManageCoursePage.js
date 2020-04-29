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
  function handleChange(event){
    const updatedCourse = {[event.target.name]:event.target.value}; /* Use computed property to set the values to inputs by their name to avoind create a hndler for each one */
    setCourse(updatedCourse);
  }
  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm course={course} onChange={ handleChange}/>
    </>
  );
};

export default ManageCoursePage;
