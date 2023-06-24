// export const ADD_TODO = "ADD_TODO";
import { ADD_TODO, DELETE_TODO, EDIT_TODO,TOGGLE_HIDE_COMPLETED } from "../Action";

// const initialState =[];
const initialState = {
  todos: [],
  hideCompleted: false,
};

const reducer = (state = initialState, action) => {

      switch (action.type) {
          case ADD_TODO: return [...state, action.payload];

          case DELETE_TODO: return state.filter((todo, index) => index !== action.payload);

          case EDIT_TODO : return state.map((todo,index) =>{
            if (index === action.payload.id) {
              return {
                ...todo,
                title: action.payload.title,
                todolist: action.payload.todolist,
              };
            }
          });

          case TOGGLE_HIDE_COMPLETED:
          return { ...state, hideCompleted: !state.hideCompleted };

          default: return state;
        }
      };
    
    export default reducer;
    
    
