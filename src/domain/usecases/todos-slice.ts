import { createAsyncThunk, createSelector, createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

import { TodosState } from "../entities/todos-types";

import { api as myTodosApi } from "../../infrastucture";

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.todos>
    ) {
      state.todos = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(myFetchTodos.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(myFetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(myFetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(myAddTodo.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(myAddTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(myAddTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(myDeleteTodo.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(myDeleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(myDeleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(myUpdateTodo.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(myUpdateTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    });
    builder.addCase(myUpdateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  }
});

/************   USECASES FUNCTIONS FOR TODOS  ************/

export const myFetchTodos = createAsyncThunk(
  'todos/myTodos',
  async (
    _,
    { rejectWithValue }: { rejectWithValue: any }
  ) => {
    try {
      const response = await myTodosApi.fetchTodos();
      return response;
    } catch (error) {
      console.error('Erreur lors du fetch todo : ', error);
      return rejectWithValue("Couldn't get todo");
    }
  }
)

export const myAddTodo = createAsyncThunk(
  'todos/myAddTodo',
  async (
    title: string,
    { rejectWithValue }: { rejectWithValue: any }
  ) => {
    try {
      const response = await myTodosApi.addTodo(title);
      return response;
    } catch (error) {
      console.error('Erreur lors de l\'ajoute du todo  : ', error);
      return rejectWithValue("Couldn't add todo");
    }
  }
)

export const myDeleteTodo = createAsyncThunk(
  'todos/myDeleteTodo',
  async (
    id: number,
    { rejectWithValue }: { rejectWithValue: any }
  ) => {
    try {
      await myTodosApi.deleteTodo(id);
      return id;
    } catch (error) {
      console.error('Erreur lors de la suppression du todo  : ', error);
      return rejectWithValue("Couldn't delete todo");
    }
  }
)

export const myUpdateTodo = createAsyncThunk(
  'todos/myUpdateTodo',
  async (
    { id, title, completed }: { id: number, title: string, completed: boolean },
    { rejectWithValue }: { rejectWithValue: any }
  ) => {
    try {
      const response = await myTodosApi.updateTodo(
        id,
        title,
        completed
      );
      return response;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du todo  : ', error);
      return rejectWithValue("Couldn't update todo");
    }
  }
)

export const { setTodos } = todosSlice.actions;

const selectTodosState = (state: { todos: TodosState }) => state.todos;
const selectErrorState = (state: { error: TodosState }) => state.error;

export const selectTodos = createSelector(
  selectTodosState,
  ({ todos }) => todos
);

export const selectError = createSelector(
  selectErrorState,
  ({ error }) => error
);
  
export default todosSlice.reducer;