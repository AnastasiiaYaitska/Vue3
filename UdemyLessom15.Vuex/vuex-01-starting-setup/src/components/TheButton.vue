<template>
  <button @click="increment">Add</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addTen() {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    // addOne() {
    // console.log(this.$store.getters.finalCounter);
    // this.$store.dispatch('increment');
    // },
    ...mapActions(['increment', 'increase']),
  },
};
</script>
