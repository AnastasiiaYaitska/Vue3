import { createStore } from 'vuex';
import CoachesModule from './modules/coaches/index';
import RequestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: CoachesModule,
    requests: RequestsModule,
  },
  state() {
    return {};
  },
});

export default store;
