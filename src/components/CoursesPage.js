import React, { useState, useEffect } from "react";
import courseStore from '../stores/courseStore';
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courseStore.getCourse());
  }, []);

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
