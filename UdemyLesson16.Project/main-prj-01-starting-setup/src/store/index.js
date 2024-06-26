import { createStore } from 'vuex';
import CoachesModule from './modules/coaches/index';
import RequestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: CoachesModule,
    requests: RequestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
});

export default store;
