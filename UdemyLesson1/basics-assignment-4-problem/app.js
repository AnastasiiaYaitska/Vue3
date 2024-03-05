const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isParagraphVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    styleInput() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.isParagraphVisible,
        hidden: !this.isParagraphVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
  },
});

app.mount("#assignment");
