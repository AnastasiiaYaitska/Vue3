export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    state.didAuthLogout = false;
  },
  setDidAuthLogout(state) {
    state.didAuthLogout = true;
  },
};
