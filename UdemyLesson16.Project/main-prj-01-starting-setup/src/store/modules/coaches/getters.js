export default {
  getAllCoaches(state) {
    return state.coachesList;
  },
  hasCoaches(state) {
    return state.coachesList && state.coachesList.length > 0;
  },
  isCoachWasRegistered(_, getters, _2, rootGetters) {
    const coaches = getters.getAllCoaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};
