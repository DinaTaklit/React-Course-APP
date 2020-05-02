import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses } from "../actions/courseActions";

function CoursePage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListner(onChange); // listend when the function mount to load courses
    if (courseStore.getCourses().length === 0) loadCourses(); // load the courses if theire is no courses in the store
    // Remove the change listner when the app unmounte
    return () => courseStore.removeChangeListner(onChange); // cleanup on unmount(when we navigate to diff pages)
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses}></CourseList>
    </>
  );
}

export default CoursePage;
