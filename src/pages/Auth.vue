<script setup>
import CheckNumber from "../components/Auth/CheckNumber.vue";
import InputNumber from "../components/Auth/InputNumber.vue";
import Register from "../components/Auth/Register.vue";
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();
</script>

<template>
  <div>
    <InputNumber v-if="authStore.currentStage === 1" />
    <CheckNumber v-if="authStore.currentStage === 2" />
    <Register v-if="authStore.currentStage === 3" />
  </div>
</template>

<style scoped></style>
