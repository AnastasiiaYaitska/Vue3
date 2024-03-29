export default {
  addCoach(context, data) {
    const { first, last, desc, rate, areas } = data;
    const formData = {
      id: context.rootGetters.userId,
      firstName: first,
      lastName: last,
      description: desc,
      areas: areas,
      hourlyRate: rate,
    };
    context.commit('addCoach', formData);
  },
};
