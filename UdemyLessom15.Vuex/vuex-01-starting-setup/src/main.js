import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
      isLogIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    userLogIn(state) {
      state.isLogIn = true;
    },
    userLogOut(state) {
      state.isLogIn = false;
    },
  },

  //the mutation can't be acync function, there for we use actions. They do acync and after can commit result in mutation. We give actions the same name as mutations. And call actions in components
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 200);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
    userLogIn(context) {
      context.commit('userLogIn');
    },
    userLogOut(context) {
      context.commit('userLogOut');
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizeCounter(_, getters) {
      const finalCount = getters.finalCounter;
      if (finalCount < 0) {
        return 0;
      } else if (finalCount > 100) {
        return 100;
      } else {
        return finalCount;
      }
    },
    userAuth(state) {
      return state.isLogIn;
    },
  },
});

app.use(store);

app.mount('#app');
