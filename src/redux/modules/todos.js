// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

// state초기 설정
const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; //TODO: 여기 작성

    case "DELETE_TODO":
      return state.filter(function (item) {
        return;
      }); // filter TODO: 여기 작성

    case "SWITCH_TODO":
      return; // map.filter TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
