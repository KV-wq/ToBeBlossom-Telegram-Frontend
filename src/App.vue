<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import router from "./router/router";

onMounted(() => {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
  AOS.init({
    duration: 500,
    easing: "ease-out",
    once: true,
  });

  setTimeout(() => {
    router.push("/auth");
  }, 1000);
});
</script>

<template>
  <router-view></router-view>
</template>
