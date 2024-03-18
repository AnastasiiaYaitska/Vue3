import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, //in this case we redirect our user to another url and change url in search line
    // { path: '/teams', component: TeamsList , alias: '/},      in this case we rerender our component on path '/ ' and url is doesn't change.

    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', //adding custom name to active class, instead of default 'router-link-active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
