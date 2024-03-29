<template>
  <section>
    <base-card>
      <h3>Registration as a coach!</h3>
      <coach-form @save-data="savData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    savData(data) {
      this.$store.dispatch('coaches/addCoach', data);
      // this.$router.push('/coaches');   // in this case users can go back
      this.$router.replace('/coaches'); // in this case user can not go back on the page
    },
  },
};
</script>
