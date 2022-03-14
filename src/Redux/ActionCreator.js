
import * as ActionType from './ActionType';
import DISHES from './../Data/Dishes';

export const addComment = (dishId, author, rating, comment) => ({
  
    type: "ADD_COMMENT",
    payload: {
      dishId: dishId,
      author: author,
      rating: rating,
      comment: comment,
    },
  
});
export const loadingDishes = dishes => ({
  type: ActionType.LOAD_DISHES,
  payload: dishes
})
export const dishesLoading = () => ({
  type: ActionType.DISHES_LOADING,
  
})
export const fetchDishes = () => {
  return dispatch => {
    dispatch(dishesLoading());

    setTimeout(() => {
      dispatch(loadingDishes(DISHES))
    }, 1000);
  }
  
  
}
