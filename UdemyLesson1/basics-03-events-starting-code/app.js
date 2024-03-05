const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmName: "",
      //fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(newValue, oldValue) {
    //   if (newValue === "") {
    //     return "";
    //   }
    //   return (this.fullName = newValue + " " + this.fullName);
    // },
    // lastName(newValue, oldValue) {
    //   if (newValue === "") {
    //     return "";
    //   }
    //   return (this.fullName = this.name + " " + newValue);
    // },
  },
  computed: {
    fullName() {
      console.log("Running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    add() {
      this.counter++;
    },

    remove() {
      this.counter--;
    },

    // outputFullName() {
    //   console.log("Running again");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Brian";
    // },

    // setName(event, secondName) {
    //   this.name = event.target.value + " " + secondName;
    // },
    resetName() {
      this.name = "";
    },
    submit() {},

    // confirmInput() {
    //   this.confirmName = this.name;
    // },
  },
});

app.mount("#events");
