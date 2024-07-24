import { createRouter, createWebHistory } from 'vue-router';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachesDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }], /// /coaches/76r7364/contact
    },
    {
      path: '/register',
      component: CoachesRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/request',
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
// global navigation guard

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
