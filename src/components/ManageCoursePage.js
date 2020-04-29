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
  function handleChange(target){ /*this distructring is like doing const target = event.target*/
    
   /* Use computed property to set the values to inputs by their name to avoind create a hndler for each one */
    setCourse({...course,[target.name]:target.value});
  }
  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm course={course} onChange={ handleChange}/>
    </>
  );
};

export default ManageCoursePage;
