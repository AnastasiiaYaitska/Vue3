const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },

  methods: {
    add(number) {
      this.number = this.number + number;
      console.log(this.number);
    },
  },
});

app.mount("#assignment");
