import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { LoginPageContainer } from './pages/login';
import { RecipeListPageContainer } from "./pages/recipes/list";
import { EditRecipePageContainer } from "./pages/recipes/edit";

const routes: RouteConfig[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPageContainer },
  { path: '/recipe', component: RecipeListPageContainer },
  { path: '/recipe/:id', component: EditRecipePageContainer, props: true },
];

// Antes de exportar el router le decimos a Vue que deberá usarlo
Vue.use(Router);

export const router = new Router({
  routes,
});