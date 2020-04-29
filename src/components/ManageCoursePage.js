import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as coureApi from '../api/courseApi'; // import all the function in the course Apo

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });
  function handleChange({target}) {
    /*this distructring is like doing const target = event.target*/

    /* Use computed property to set the values to inputs by their name to avoind create a hndler for each one */
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    coureApi.saveCourse(course)
  }
  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm 
      course={course} 
      onChange={handleChange}
      onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
