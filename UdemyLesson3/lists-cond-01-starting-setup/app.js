const app = Vue.createApp({
  data() {
    return {
      enteredInputValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredInputValue);
      this.enteredInputValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
