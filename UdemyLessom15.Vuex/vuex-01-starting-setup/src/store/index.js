import { createStore } from 'vuex';
import counterModule from './module/counter';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLogIn: false,
    };
  },
  mutations: rootMutations,

  //the mutation can't be acync function, there for we use actions. They do acync and after can commit result in mutation. We give actions the same name as mutations. And call actions in components
  actions: rootActions,
  getters: rootGetters,
});

export default store;
