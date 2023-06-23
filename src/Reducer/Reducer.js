// export const ADD_TODO = "ADD_TODO";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../Action";

const initialState =[];

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

          default: return state;
        }
      };
    
    export default reducer;
    
    
