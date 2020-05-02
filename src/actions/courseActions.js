import * as courseApi from "../api/courseApi";
import dispatcher from '../appDispatcher'

export function saveCourse(course){
    courseApi.saveCourse(course).then(savedCourse=>{
        // hey dispatcher, go tell all the stores that a course was just created. 
        dispatcher.dispatch({
            actionType: "CREATE_COURSE",
            course:savedCourse
        });
    });
}