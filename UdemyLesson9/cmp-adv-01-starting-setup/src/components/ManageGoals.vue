<template>
  <div>
    <h2>Manage goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Save my goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Insert at least 2 characters....</p>
        <button @click="confirmAlert">Ok</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmAlert() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
