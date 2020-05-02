import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"; // import all the function in the course Apo
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  // Get the course once the componenet mount
  useEffect(() => {
    console.log("Use effect");
    const slug = props.match.params.slug; // get the slug from /courses/:slug
    console.log(slug);
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
    // Add the array of dependency to keep an eye on the slug, when the slug run the effect should rerun
  }, [props.match.params.slug]);

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
    courseApi.saveCourse(course).then(() => {
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

CourseForm.prototype = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default ManageCoursePage;
