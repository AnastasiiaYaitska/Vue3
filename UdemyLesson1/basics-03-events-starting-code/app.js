const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },

    remove() {
      this.counter--;
    },

    setName(event, secondName) {
      this.name = event.target.value + " " + secondName;
    },

    submit() {},

    confirmInput() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
