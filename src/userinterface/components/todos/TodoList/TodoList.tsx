import { useEffect } from "react";

import { useDispatch, useSelector } from "../../../../store/store";
import { selectTodos, myFetchTodos, myDeleteTodo, myUpdateTodo } from "../../../../domain/usecases/todos-slice";

import { Todo } from "../../../../domain/entities/todos-types";

import TodoCard from "../TodoCard/TodoCard";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myFetchTodos());
  }, [dispatch]);

  const todos = useSelector(selectTodos);

  const deleteTodo = (id: number) => {
    dispatch(myDeleteTodo(id));
  }

  const updateTodo = (todo: Todo) => {
    dispatch(myUpdateTodo({
      ...todo,
      completed: !todo.completed
    }));
  }

  return (
    <section>
      <h1>TodoList</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onToggle={() => updateTodo(todo)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
