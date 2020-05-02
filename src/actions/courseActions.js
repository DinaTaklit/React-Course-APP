import * as courseApi from "../api/courseApi";
import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes';

export function saveCourse(course){
    return courseApi.saveCourse(course).then(savedCourse=>{
        // hey dispatcher, go tell all the stores that a course was just created. 
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course:savedCourse
        });
    });
}