export default {
  async addRequest(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://coaches-1f75d-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request!'
      );
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.getUserId;
    const response = await await fetch(
      `https://coaches-1f75d-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch request!'
      );
      throw error;
    }

    const requests = Object.keys(responseData).map((key) => ({
      id: key,
      coachId: coachId,
      ...responseData[key],
    }));

    context.commit('setRequests', requests)
  },
};
