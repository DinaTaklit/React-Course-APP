import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
const CHANGE_EVENT = "change";

class CourseStore extends EventEmitter {
    addChangeListner(callback){
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListner(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
   
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
}

const store = new CourseStore();

Dispatcher.register(action => {
    switch(action.actionType){
        
    }
})

export default store;