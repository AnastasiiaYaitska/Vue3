<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleClose">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>Requests Received</header>
        <base-spinner v-if="isLoading"/>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.email"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You have not received any requests yet!</h3></base-card
      >
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestsItem.vue';
export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/allRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/isHasRequests'];
    },
  },
  created(){
    this.loadRequests()
  },  
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleClose() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
