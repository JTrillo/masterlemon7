export interface RootState {
  loading: boolean;
  recipes: Recipe[];
  snackbar: Snackbar;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
}

export interface Snackbar {
  message: string;
  isActive: boolean;
  type?: 'success' | 'info' | 'error';
}