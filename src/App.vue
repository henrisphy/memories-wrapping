<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
@import url("https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap");

:root {
  --primary-color: #2c3e50;
  --secondary-color: #42b983;
  --background-color: #f9f9f9;
  --card-bg: rgba(255, 255, 255, 0.85);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Cabinet Grotesk", sans-serif;
}

body {
  background-color: var(--background-color);
  color: var(--primary-color);
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}
</style>
