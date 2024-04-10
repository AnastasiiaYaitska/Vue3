export default {
  allRequests(store) {
    return store.requests;
  },
  isHasRequests(store) {
    return store.requests && store.requests.length > 0;
  },
};
