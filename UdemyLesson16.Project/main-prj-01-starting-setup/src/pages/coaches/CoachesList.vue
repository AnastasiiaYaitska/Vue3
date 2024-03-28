<template>
  <section>
    <coaches-filter @update-filter="setFilter"></coaches-filter>
  </section>
  <section>
    <base-card>
      <div class="container">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a coach</base-button>
        <ul v-if="hasCoaches">
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
</template>

<script>
import CoachesItem from '../../components/coaches/CoachesItem.vue';
import CoachesFilter from '../../components/coaches/CoachesFilter.vue';
export default {
  components: { CoachesItem, CoachesFilter },
  data() {
    return {
      activeFilter: { frontend: true, backend: true, career: true },
    };
  },
  computed: {
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
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilter(updateFilter) {
      this.activeFilter = updateFilter;
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
