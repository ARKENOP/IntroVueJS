import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AllTasksPage from '../views/AllTasksPage.vue';
import TaskDetailPage from '../views/TaskDetailPage.vue';
import AddTaskPage from '../views/AddTaskPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/all-tasks', component: AllTasksPage },
  { path: '/task/:id', component: TaskDetailPage, props: true },
  { path: '/add-task', component: AddTaskPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
