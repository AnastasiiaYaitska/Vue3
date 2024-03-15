<template>
  <base-dialog v-if="isInputInvalid" title="Invalid input" @close="acceptError">
    <template #default>
      <p>Unfortunately,at list one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least two characters
        into each input fields.
      </p>
    </template>
    <template #action>
      <base-button @click="acceptError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="inputTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="inputDescription"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="inputUrl" />
      </div>
      <base-button type="submit">Add resource</base-button>
    </form></base-card
  >
</template>

<script>
export default {
  inject: ['addNewResource'],
  emits: ['close'],
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.inputTitle.value;
      const enteredDescription = this.$refs.inputDescription.value;
      const enteredUrl = this.$refs.inputUrl.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.isInputInvalid = true;
        return;
      }
      this.addNewResource(enteredTitle, enteredDescription, enteredUrl);
    },
    acceptError() {
      this.isInputInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
