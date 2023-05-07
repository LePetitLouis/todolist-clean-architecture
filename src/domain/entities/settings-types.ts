export type Settings = {
  theme: string;
  language: string;
  notifications: boolean;
};

export type SettingsState = {
  settings: Settings;
  loading: boolean;
  error: string;
};