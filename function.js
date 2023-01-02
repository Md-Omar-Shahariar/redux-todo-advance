const fetch = require("node-fetch");
const fetchTodo = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const todos = await response.json();
  dispatch({
    type: "todos/todoLoaded",
    payload: todos,
  });
  console.log(`Number of Updated State : ${getState().todos.length}`);
};

module.exports = { fetchTodo };
