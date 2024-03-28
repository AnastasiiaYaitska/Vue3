export default {
  getAllCoaches(state) {
    return state.coachesList;
  },
  hasCoaches(state) {
    return state.coachesList && state.coachesList.length > 0;
  },
};
