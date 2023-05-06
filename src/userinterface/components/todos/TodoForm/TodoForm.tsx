import { useState } from "react";

import { myAddTodo } from "../../../../domain/usecases/todos-slice";
import { useDispatch } from "../../../../store/store";

const TodoForm = () => {
  const dispatch = useDispatch();

  const addNewTodo = (e: any) => {
    e.preventDefault();
    console.log("addNewTodo");

    const form = e.target;
    const formData = new FormData(form);

    dispatch(myAddTodo(formData.get("title") as string));
  }

  return (
    <section>
      <h1>Add a new Todo</h1>
      <form onSubmit={addNewTodo}>
        <label>
          Title: 
          <input type="text" name="title" placeholder="Title for your todo" />
        </label>
        <button>Add</button>
      </form>
    </section>
  );
};

export default TodoForm;