<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!isFormValid">
      Please enter en valid email and not empty message area!
    </p>
    <div class="action">
      <base-button>Send message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      isFormValid: true,
    };
  },
  methods: {
    submitForm() {
      this.isFormValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.isFormValid = false;
        return;
      }
      this.$store.dispatch('requests/addRequest', {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message,
      });
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
