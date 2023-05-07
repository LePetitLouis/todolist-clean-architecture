import { useState } from "react";

import { myAddTodo } from "../../../../domain/usecases/todos-slice";
import { useDispatch } from "../../../../store/store";

import InputGeneric from "../../ui/input/InputGeneric/InputGeneric";
import InputCheckbox from "../../ui/input/InputCheckbox/InputCheckbox";

import "./TodoForm.scss";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const addNewTodo = (e: any) => {
    e.preventDefault();

    if (!title) return;

    dispatch(myAddTodo({ title, completed }));
    setTitle("");
    setCompleted(false);
  };

  return (
    <section className="todo-form">
      <form onSubmit={addNewTodo} className="todo-form__form">
        <InputCheckbox
          checked={completed}
          onChange={() => { setCompleted(!completed); }}
          name="completed"
          id="completed"
        />

        <InputGeneric
          value={title}
          placeholder="Create a new todo..."
          type="text"
          name="title"
          id="title"
          required
          onChange={(event) => { setTitle(event.target.value); }}
        />
      </form>
    </section>
  );
};

export default TodoForm;
