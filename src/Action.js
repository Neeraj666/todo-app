export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_HIDE_COMPLETED = "TOGGLE_HIDE_COMPLETED";

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo, };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

export const editTodo = (todo) => { 
  return { type: EDIT_TODO, payload: todo };
};


export const toggleHideCompleted = () => {
  return { type: TOGGLE_HIDE_COMPLETED };
};