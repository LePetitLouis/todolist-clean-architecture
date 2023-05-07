const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=6");
  const todos = await response.json();
  return todos;
};

const addTodo = async (title: string, completed: boolean) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
      completed,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const todo = await response.json();
  return todo;
};

const deleteTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );
  const todo = await response.json();
  return todo;
};

const updateTodo = async (
  id: number,
  title: string,
  completed: boolean
) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        id,
        title,
        completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const todo = await response.json();
  return todo;
};

export const api = { fetchTodos, addTodo, deleteTodo, updateTodo };
