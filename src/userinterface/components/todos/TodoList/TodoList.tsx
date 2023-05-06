import { useEffect } from "react";

import { useDispatch, useSelector } from "../../../../store/store";
import { selectTodos, myFetchTodos } from "../../../../domain/usecases/todos-slice";

import TodoCard from "../TodoCard/TodoCard";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myFetchTodos());
  }, [dispatch]);

  const todos = useSelector(selectTodos)

  console.log("TodoList", todos);

  return (
    <section>
      <h1>TodoList</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onToggle={() => { console.log("onToggle", todo.id) }}
            onDelete={() => { console.log("onDelete", todo.id) }}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
