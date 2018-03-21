import {getLessons} from './actions';
class LessonReducer {
	interaction(state = 0, action){
		switch(action.type){
        case 'CREATE':
            
            //axios post to api
            //axios get newly updated db code
            //return state as all lessons from api
            return getLessons();
        case 'READ':
            //return state as all lessons from api
            return 0;
        case 'UPDATE':
            //axios patch to api
            // axios get newly updated db code
            // return state as all lessons from api
            return 0;
        case 'DELETE':
            //axios delete to api
            //axios get newly updated db code
            // return state as all lessons from api
            return 0;
        default:
			return state;
		}
	}
}

export default new LessonReducer().interaction;