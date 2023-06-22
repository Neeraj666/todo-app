// export const ADD_TODO = "ADD_TODO";
import { ADD_TODO } from "../Action";

const initialState =[];

const reducer = (state = initialState, action) => {
      switch (action.type) {
          case ADD_TODO: return [...state, action.payload];
          default: return state;
        }
      };
    
    export default reducer;
    
    
