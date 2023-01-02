const delayAction = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying You");

    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }

  return next(action);
};

const fetchTodosMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/fetchTodos") {
  }
  return next(action);
};
module.exports = {
  delayAction,
};
