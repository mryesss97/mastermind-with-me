export interface IAppStore {
  currentTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}
