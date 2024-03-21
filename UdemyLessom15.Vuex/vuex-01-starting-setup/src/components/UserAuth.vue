<template>
  <button @click="userLogIn" v-if="!userAuth">Log in</button>
  <button @click="userLogOut" v-if="userAuth">Log out</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userAuth']),
  },
  methods: {
    ...mapActions(['userLogIn', 'userLogOut']),
  },
};
</script>
