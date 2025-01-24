<script setup>
import Button from "../components/Button.vue";
import router from "../router/router";

const back = () => {
  router.push("/profile");
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
      <div
        class="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <svg
          class="w-12 h-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 class="text-2xl font-semibold text-gray-900 mb-2">Заявка принята</h2>

      <p class="text-3xl font-bold text-gray-900 mb-4">123 456 ₽</p>

      <p class="text-gray-500 mb-8">
        Средства поступят на ваш счёт<br />
        в течение 3-х рабочих дней
      </p>

      <Button text="Готово" @click="back" class="w-full" />
    </div>
  </div>
</template>
