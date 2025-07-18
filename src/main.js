// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import file CSS utama
import "@/assets/main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
