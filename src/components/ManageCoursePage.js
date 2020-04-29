import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as coureApi from '../api/courseApi'; // import all the function in the course Apo

import { toast } from "react-toastify";

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
    // since saveCourse return a promise we can add code :D 
    coureApi.saveCourse(course).then(()=>{
      // Since this compoenet is loaded via React Router's route componet we have access to React Router's history object on props so we can programmatically redirect the user here after the save is completed 
      props.history.push("/courses");
      toast.success(`The course: ${course.title} was saved successfuly!`);
    });
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
