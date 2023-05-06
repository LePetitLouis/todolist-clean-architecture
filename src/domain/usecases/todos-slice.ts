import { createAsyncThunk, createSelector, createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

import { TodosState } from "../entities/todos-types";

import { api as myTodosApi } from "../../infrastucture";

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
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
      state.error = null;
    });
    builder.addCase(myFetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(myFetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(myAddTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(myAddTodo.fulfilled, (state, action) => {
      state.loading = false;
      console.log('action.payload : ', action.payload);
      state.todos = [...state.todos, action.payload];
    });
    builder.addCase(myAddTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = null;
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

export const { setTodos } = todosSlice.actions;

const selectTodosState = (state: { todos: TodosState }) => state.todos;
export const selectTodos = createSelector(
  selectTodosState,
  ({ todos }) => todos
);
  
export default todosSlice.reducer;