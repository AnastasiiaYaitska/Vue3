<template>
  <section>
    <p>FILTER</p>
  </section>
  <section>
    <base-card>
      <div class="container">
        <button>Refresh</button>
        <router-link to="/register">Register as a coach</router-link>
      </div>
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
    </base-card>
  </section>
</template>

<script>
import CoachesItem from '../../components/coaches/CoachesItem.vue';
export default {
  components: { CoachesItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/getAllCoaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  mounted() {
    console.log(this.filteredCoaches);
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
