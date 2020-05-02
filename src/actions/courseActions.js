import * as courseApi from "../api/courseApi";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      // if there is an id we will only update else we will create a course
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id,
    });
  });
}
