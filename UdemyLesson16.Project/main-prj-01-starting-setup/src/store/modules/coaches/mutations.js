export default {
  addCoach(state, payload) {
    state.coachesList.push(payload);
  },
  setCoaches(state, payload){
    state.coachesList = payload
  }
};
