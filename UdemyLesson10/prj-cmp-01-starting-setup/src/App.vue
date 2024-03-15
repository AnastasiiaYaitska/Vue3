<template>
  <the-header title="Remember me"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: { TheResources, TheHeader },
};
</script>
<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
}
</style>
