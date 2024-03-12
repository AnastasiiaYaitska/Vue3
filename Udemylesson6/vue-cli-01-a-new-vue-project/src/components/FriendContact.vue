<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide " : "Show " }} Details
    </button>
    <button @click="$emit('delete', id)">Delete</button>
    <!-- //we can emit event directly in event listener -->
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],   //this is simple way to add props
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator(value) {
      //   return value === "1" || value === "0";
      // },    // we can add validation for each props
    },
  },
  emits: ["toggle-favorite"],
  // this parameter helps others developers understand your code, and see what the emits component has

  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing!!");
  //       return false;
  //     }
  //   },
  //this is more clear way to add emits, you define argument in the function , and checked it

  data() {
    return {
      detailsAreVisible: false,
      // friendsIsFavorite: this.isFavorite,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "01234 5678 991",
      //   email: "manuel@localhost.com",
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
