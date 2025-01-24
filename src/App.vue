<script setup>
import { onMounted, ref } from "vue";
import AOS from "aos";
import router from "./router/router";

onMounted(() => {
  window.Telegram.WebApp.ready();
  AOS.init({
    duration: 500,
    easing: "ease-out",
    once: true,
  });

  setTimeout(() => {
    router.push("/auth");
  }, 3000);
});
</script>

<template>
  <router-view></router-view>
</template>
