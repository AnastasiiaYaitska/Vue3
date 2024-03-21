export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 200);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },
};
