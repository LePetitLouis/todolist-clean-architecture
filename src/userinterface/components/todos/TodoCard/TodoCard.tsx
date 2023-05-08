import { Todo } from "../../../../domain/entities/todos-types";

import InputCheckbox from "../../ui/input/InputCheckbox/InputCheckbox";
import IconCross from "../../../../shared/icons/icon-cross.svg";

import "./TodoCard.scss";

const TodoCard = ({ todo, onToggle, onDelete }: { todo: Todo; onToggle: () => void, onDelete: () => void }) => {
  const { title, completed } = todo;

  const isCompleted = completed ? "completed" : "";

  return (
    <div className="todo-card">
      <InputCheckbox
        checked={completed}
        onChange={onToggle}
        name="completed"
        id="completed"
      />

      <h3 className={"todo-card__title " + isCompleted}>{title}</h3>

      <img src={IconCross} alt="Cross icon" className="todo-card__icon" onClick={onDelete} />
    </div>
  );
};

export default TodoCard;
