import { Todo } from "../../../../domain/entities/todos-types";

const TodoCard = ({ todo, onToggle, onDelete }: { todo: Todo, onToggle: () => void, onDelete: () => void }) => {
  const { title, completed } = todo;
  return (
    <div className="todo-card">
      <div className="todo-card__title">
        <h3>{title}</h3>
      </div>
      <div className="todo-card__actions">
        <button onClick={onToggle}>{completed ? "Done" : "Not Done"}</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;