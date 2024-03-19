<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
    <button @click="confirmChange">Save changes</button>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isSaved: false,
    };
  },
  methods: {
    confirmChange() {
      this.isSaved = true;
    },
  },
  //guard in component
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.isSaved) {
      next();
    } else {
      const survey = confirm(
        'Are you shure that you want to leave the page before saving you data??'
      );
      next(survey);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
