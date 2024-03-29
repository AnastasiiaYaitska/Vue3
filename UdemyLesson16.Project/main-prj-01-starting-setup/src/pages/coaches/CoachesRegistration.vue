<template>
  <section>
    <base-card>
      <h3>Registration as a coach!</h3>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
};
</script>
