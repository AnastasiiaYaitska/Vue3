export default {
  allRequests(store, _, _2, rootGetters) {
    const coachId = rootGetters.getUserId;
    return store.requests.filter((req) => req.coachId === coachId);
  },
  isHasRequests(_, getters) {
    return getters.allRequests && getters.allRequests.length > 0;
  },
};
