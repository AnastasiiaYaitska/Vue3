export default {
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
};
