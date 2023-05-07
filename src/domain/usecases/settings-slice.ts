import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { SettingsState } from "../entities/settings-types";

const defaultTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
document.documentElement.setAttribute("data-theme", defaultTheme);

const initialState: SettingsState = {
  loading: false,
  error: "",
  settings: {
    theme: defaultTheme,
    language: "en",
    notifications: true,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings(state, action: PayloadAction<typeof initialState.settings>) {
      state.settings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(myUpdateTheme.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(myUpdateTheme.fulfilled, (state, action) => {
      state.loading = false;
      state.settings.theme = action.payload;
      document.documentElement.setAttribute("data-theme", action.payload);
    });
    builder.addCase(myUpdateTheme.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
    });
  },
});

export const myUpdateTheme = createAsyncThunk(
  "settings/updateTheme",
  async (theme: string) => {
    // TODO - call api to update theme
    return theme;
  }
);

const selectThemeState = (state: { settings: SettingsState }) =>
  state.settings.settings.theme;

export const selectTheme = createSelector(selectThemeState, (theme) => theme);

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
