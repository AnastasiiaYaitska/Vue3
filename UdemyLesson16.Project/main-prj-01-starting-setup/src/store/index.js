import { createStore } from 'vuex';
import CoachesModule from './modules/coaches/index';
import RequestsModule from './modules/requests/index';
import AuthModule from './modules/auth/index';

const store = createStore({
  modules: {
    coaches: CoachesModule,
    requests: RequestsModule,
    auth: AuthModule,
  },
});

export default store;
