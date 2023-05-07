import { Todo } from "../../../../domain/entities/todos-types";

import InputCheckbox from "../../ui/input/InputCheckbox/InputCheckbox";

import './TodoCard.scss'

const TodoCard = ({ todo, onToggle }: { todo: Todo, onToggle: () => void }) => {
  const { title, completed } = todo;

  const isCompleted = completed ? 'completed' : '';

  return (
    <div className="todo-card" onClick={onToggle}>
      <InputCheckbox
        checked={completed}
        onChange={onToggle}
        name="completed"
        id="completed"
      />

      <h3 className={'todo-card__title ' + (isCompleted)}>{title}</h3>
    </div>
  );
};

export default TodoCard;