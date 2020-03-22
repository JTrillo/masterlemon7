import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { MemberTable } from './components';
import { MemberCardPageContainer } from './components/memberCard';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/members' },
  { path: '/members', component: MemberTable },
  { path: '/member/:login', component: MemberCardPageContainer, props: true },
];

Vue.use(Router);

export const router = new Router({
  routes
});