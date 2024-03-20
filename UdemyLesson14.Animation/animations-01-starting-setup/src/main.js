import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'users', component: AllUsers },
    {
      path: '/goals',
      name: 'goals',
      component: CourseGoals,
    },
  ],
});
const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

//we mount our app just after aur routes is ready
router.isReady().then(() => app.mount('#app'));
