import { createApp } from "vue";

import App from "./App.vue";

import BaseBadge from "./components/BaseBadge.vue";
// import BadgeList from "./components/BadgeList.vue";

const app = createApp(App);

//global components registration! this components available in all app

app.component("base-badge", BaseBadge);
// app.component("badge-list", BadgeList);

app.mount("#app");
