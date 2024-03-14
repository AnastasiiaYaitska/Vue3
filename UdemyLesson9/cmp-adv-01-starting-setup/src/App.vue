<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage goals</button>
    <!-- allows to keep component and not destroy it after switch, work only with <component>  ( dynamic component) -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals #default="slotProps"> -->
    <!-- <template #default="slotProps"> -->
    <!-- <h2>{{ slotProps.goal }}</h2>
      <p>{{ slotProps["another-prop"] }}</p> -->
    <!-- </template> -->
    <!-- </CourseGoals> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals";
import ManageGoals from "./components/ManageGoals.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";

export default {
  //local components registration. Available locale
  components: {
    // "the-header": TheHeader,    if you registered components like this , they are available like open-close cebab-case components
    TheHeader,
    ActiveGoals,
    ManageGoals,
    //   BadgeList, //if vi registered components like this , they are available in both sintakse
    //   UserInfo,
    //   CourseGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      // activeUser: {
      //   name: "Maximilian Schwarzmüller",
      //   description: "Site owner and admin",
      //   role: "admin",
      // },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
      console.log(cmp);
    },
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
