
import DISHES from './../Data/Dishes';
import COMMENTS from './../Data/Comments';
import { combineReducers } from 'redux';
import * as ActionType from './ActionType';



const dishReducer = (dishState = {isLoading: false, dishes: [] }, action) => {
        switch (action.type) {
            case ActionType.DISHES_LOADING:
            return{
                ...dishState,
                isLoading : true,
                dishes : []

            }
            case ActionType.LOAD_DISHES:
                return {

                    ...dishState,
                    isLoading : false,
                    dishes : action.payload
                }
          
            default:
                return dishState; 
        }
    
}
const commentReducer = (commentState = COMMENTS, action) => {
        switch (action.type) {
            case 'ADD_COMMENT':
                let comment = action.payload
                comment.id = commentState.length;
                comment.date = new Date().toDateString();
                //console.log(comment);
                return commentState.concat(comment) 
             
            default:
                return commentState;
                
        }
    
    
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})