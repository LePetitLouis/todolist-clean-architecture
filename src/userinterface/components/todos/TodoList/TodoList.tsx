import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "../../../../store/store";
import {
  selectTodos,
  myFetchTodos,
  myUpdateTodo,
  myDeleteTodo,
} from "../../../../domain/usecases/todos-slice";

import { Todo } from "../../../../domain/entities/todos-types";

import TodoCard from "../TodoCard/TodoCard";

import "./TodoList.scss";

const TodoList = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<"all" | "active" | "completed">("all");
  const todos = useSelector(selectTodos);
  
  const filterMap = {
    all: () => true,
    active: (todo: Todo) => !todo.completed,
    completed: (todo: Todo) => todo.completed,
  };

  useEffect(() => {
    dispatch(myFetchTodos());
  }, [dispatch]);

  const updateTodo = (todo: Todo) => {
    dispatch(
      myUpdateTodo({
        ...todo,
        completed: !todo.completed,
      })
    );
  };

  const deleteTodo = (id: number) => {
    dispatch(myDeleteTodo(id))
  }

  return (
    <section className="todo-list">
      <ul className="todo-list__container">
        {todos.filter(filterMap[status]).map((todo) => (
          <li>
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggle={() => updateTodo(todo)}
              onDelete={() => deleteTodo(todo.id)}
            />
          </li>
        ))}
        <li>
          <div className="todo-list__container__settings">
            <p>{todos.filter(filterMap[status]).length} item(s) left</p>

            <ul className="todo-list__container__settings--status">
              <li
                onClick={() => setStatus("all")}
                className={status === "all" ? "active" : ""}
              >
                All
              </li>
              <li
                onClick={() => setStatus("active")}
                className={status === "active" ? "active" : ""}
              >
                Active
              </li>
              <li
                onClick={() => setStatus("completed")}
                className={status === "completed" ? "active" : ""}
              >
                Completed
              </li>
            </ul>

            <p>Clear completed</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
