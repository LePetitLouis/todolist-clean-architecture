export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosState = {
  todos: Todo[];
  loading: boolean;
  error: string;
};