<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals #default="slotProps">
      <!-- <template #default="slotProps"> -->
      <h2>{{ slotProps.goal }}</h2>
      <p>{{ slotProps["another-prop"] }}</p>
      <!-- </template> -->
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  //local components registration. Available locale
  components: {
    // "the-header": TheHeader,    if you registered components like this , they are available like open-close cebab-case components
    BadgeList, //if vi registered components like this , they are available in both sintakse
    TheHeader,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
