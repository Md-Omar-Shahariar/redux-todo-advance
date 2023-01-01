const { createStore, applyMiddleware } = require("redux");

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      break;
  }
};
const store = createStore(todoReducer, applyMiddleware());

///subscribe
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "todos/todoAdded",
  payload: "Learn Redux",
});
