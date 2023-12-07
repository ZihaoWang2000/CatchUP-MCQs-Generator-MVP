import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue";
import MCQ from "@/views/MCQ.vue";
import Wait from "@/views/Wait.vue"


const routes = [
  {
    path:'/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/result',
    name: 'MCQ',
    component: MCQ,
  },
  {
    path: '/loading',
    name: 'Wait',
    component: Wait,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
