import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, //in this case we redirect our user to another url and change url in search line
    // { path: '/teams', component: TeamsList , alias: '/},      in this case we rerender our component on path '/ ' and url is doesn't change.

    {
      name: 'teams',
      path: '/teams',
      meta: { needAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, //nested route
    {
      name: 'users',
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEach');
        console.log(to, from);
        next(); //conform every navigation
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active', //adding custom name to active class, instead of default 'router-link-active''
  scrollBehavior(to, from, scrollPosition) {
    console.log(to, from, scrollPosition);
    if (scrollPosition) {
      return scrollPosition;
    }
    return { left: 0, top: 0 };
  },
});

//global router guard
router.beforeEach((to, from, next) => {
  console.log('Global beforeEachEach');
  console.log(to, from);
  //   if (to.name === 'team-members') {       //example of using
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } });
  //   }

  if (to.meta.needAuth) {
    next();
  } else {
    next(); //here you can prevent routing
  }
});

router.afterEach((to, from) => {
  //sending analytic data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
