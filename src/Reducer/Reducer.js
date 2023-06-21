// export const ADD_TODO = "ADD_TODO";
// import { ADD_TODO } from "../Action";


// const reducer = (state = initialState, action) => {
  //     switch (action.type) {
    //       case ADD_TODO: return [...state, action.payload];
    //       default: return state;
    //     }
    //   };
    
    //   export default reducer;
    
    
    // ./Reducer/Reducer.js
    
import { ADD_TODO, EDIT_TODO } from "../Action";
    
  const initialState =[];

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...state, action.payload];
      case EDIT_TODO:
        const { id, updatedTodo } = action.payload;
        return state.map((todo) => (todo.id === id ? updatedTodo : todo));
      default:
        return state;
    }
  };
  
  export default reducer;

