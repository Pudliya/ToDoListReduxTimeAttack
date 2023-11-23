// import uuid from "react-uuid";
import shortid from "shortid";

// const ADD_TODO = "ADD_TODO";

// export const addTodo = payload

// state초기 설정
const initialState = [
  {
    id: shortid.generate(),
    title: "",
    contents: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        // [...state, action.payload]
      }; //TODO: 여기 작성

    case "DELETE_TODO":
      return {}; //TODO: 여기 작성

    case "SWITCH_TODO":
      return {}; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
