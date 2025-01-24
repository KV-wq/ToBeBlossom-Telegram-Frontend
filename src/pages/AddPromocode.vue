<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import router from "../router/router";

const range = ref(10);

const savePromocode = () => {};
const back = () => {
  router.back();
};
</script>

<template>
  <div class="container" data-aos="fade-right" data-aos-duration="500">
    <h2 class="text-2xl font-bold">Создать промокод</h2>

    <div class="flex gap-3 mt-7">
      <input
        type="text"
        placeholder="Название"
        class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-full h-11 mb-2 text-center"
      />
      <button
        class="w-24 h-11 bg-lime-300 rounded-xl transition-all active:scale-95 active:translate-y-1"
      >
        ОК
      </button>
    </div>

    <input
      id="range"
      type="range"
      v-model="range"
      class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-8 mb-4"
      min="5"
      step="5"
      max="20"
    />

    <div class="mb-6 mt-4 flex gap-3">
      <div class="w-full rounded-xl border border-black/85 px-3 py-1">
        <p>Ваш доход</p>
        <p class="text-lg font-semibold">{{ range }}%</p>
      </div>
      <div class="w-full rounded-xl border border-black/85 px-3 py-1">
        <p>Скидка клиенту</p>
        <p class="text-lg font-semibold">{{ 25 - range }}%</p>
      </div>
    </div>

    <input
      type="number"
      placeholder="Дата лимита действия"
      class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-full h-9 mb-2 text-center"
    />
    <input
      type="text"
      placeholder="Заметки для себя"
      class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-full h-9 mb-2 text-center"
    />

    <Button text="Создать" class="w-full mt-5" @click="savePromocode" />
    <Button text="Назад" class="border border-black" isWhite @click="back" />
  </div>
</template>
