<template>
  <form @submit.prevent="submitNewContact">
    <div>
      <label>Full Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <label>Telephone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <button type="submit">Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["submit-contact"],
  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPhone: "",
    };
  },
  methods: {
    submitNewContact() {
      this.$emit("submit-contact", {
        name: this.enteredName,
        email: this.enteredEmail,
        phone: this.enteredPhone,
      });
    },
  },
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
