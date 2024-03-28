<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="action">
      <router-link :to="coachContactLinks">Contact</router-link>
      <router-link :to="coachDetailsLinks">View details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'areas', 'rate', 'id'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLinks() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLinks() {
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.action {
  display: flex;
  justify-content: flex-end;
}
</style>
