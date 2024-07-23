export default {
  async addCoach(context, data) {
    const { first, last, desc, rate, areas } = data;
    const userId = context.rootGetters.getUserId;
    const token = context.rootGetters.getToken;
    const formData = {
      firstName: first,
      lastName: last,
      description: desc,
      areas: areas,
      hourlyRate: rate,
    };

    const response = await fetch(
      `https://coaches-1f75d-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(formData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      //error
    }
    context.commit('addCoach', { ...formData, id: userId });
  },

  async loadCoaches(context) {
    const response = await fetch(
      'https://coaches-1f75d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const coaches = Object.keys(responseData).map((key) => ({
      id: key,
      ...responseData[key],
    }));
    context.commit('setCoaches', coaches);
  },
};
