import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from '../stores/courseStore'; // use the Store instead of the API 
import { toast } from "react-toastify";
import * as courseActions from '../actions/courseActions';

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  // Get the course once the componenet mount
  useEffect(() => {
    courseStore.addChangeListner(onChange);
    const slug = props.match.params.slug; // get the slug from /courses/:slug
    if (courses.length === 0){
      courseActions.loadCourses();
    }
    else if (slug) {
      // Set the course using the Store instead of the API 
      setCourse(courseStore.getCourseBySlug(slug));
    }
    // Add the array of dependency to keep an eye on the slug, when the slug run the effect should rerun
    return ()=> courseStore.removeChangeListner(onChange); // clear on unmount
  }, [courses.length, props.match.params.slug]);

  function onChange(){
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    /*this distructring is like doing const target = event.target*/
    /* Use computed property to set the values to inputs by their name to avoind create a hndler for each one */
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }
  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "AuthorId is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    // since saveCourse return a promise we can add code :D
    // Use actions instead of the API 
    courseActions.saveCourse(course).then(() => {
      // Since this compoenet is loaded via React Router's route componet we have access to React Router's history object on props so we can programmatically redirect the user here after the save is completed
      props.history.push("/courses");
      toast.success(`The course: ${course.title} was saved successfuly!`);
    });
  }
  return (
    <>
      <h2> Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
