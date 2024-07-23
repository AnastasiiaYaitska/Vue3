<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleClose">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coaches-filter @update-filter="setFilter"></coaches-filter>
    </section>
    <section>
      <base-card>
        <div class="container">
          <div class="controls">
            <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
            <base-button v-if="!isCoach && !isLoading && isLoggedIn" link to="/register"
              >Register as a coach</base-button
            >
            <base-button link to="/auth" v-if="!isLoggedIn">Login</base-button>
          </div>
          <div v-if="isLoading">
            <base-spinner />
          </div>
          <ul v-else-if="hasCoaches">
            <coaches-item
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :id="coach.id"
              :first-name="coach.firstName"
              :last-name="coach.lastName"
              :areas="coach.areas"
              :rate="coach.hourlyRate"
            ></coaches-item>
          </ul>
          <p v-else>No coaches available</p>
        </div>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachesItem from '../../components/coaches/CoachesItem.vue';
import CoachesFilter from '../../components/coaches/CoachesFilter.vue';
export default {
  components: { CoachesItem, CoachesFilter },
  data() {
    return {
      activeFilter: { frontend: true, backend: true, career: true },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated
    },
    isCoach() {
      return this.$store.getters['coaches/isCoachWasRegistered'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/getAllCoaches'];
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilter.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilter.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    handleClose() {
      this.error = null;
    },
    setFilter(updateFilter) {
      this.activeFilter = updateFilter;
    },
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
