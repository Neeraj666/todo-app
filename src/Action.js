// import { ADD_TODO } from "./Reducer/Reducer";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo, };
};

export const editTodo = (id, updatedTodo) => {
  return { type: EDIT_TODO, payload: { id, updatedTodo } };
};