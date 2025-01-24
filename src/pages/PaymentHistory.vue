<script setup>
import HistoryItem from "../components/Profile/HistoryItem.vue";
import Button from "../components/Button.vue";
import router from "../router/router";

const back = () => {
  router.back();
};
</script>

<template>
  <div
    class="container flex flex-col justify-between h-screen"
    data-aos="fade-right"
    data-aos-duration="500"
  >
    <div class="flex-1">
      <h2 class="text-xl text-center font-bold">История вывода средств</h2>

      <div class="flex justify-between items-center mt-6">
        <div>
          <select
            id="date"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option value="today" selected>Сегодня</option>
            <option value="week">Эта неделя</option>
            <option value="month">Этот месяц</option>
            <option value="30d">За 30 дней</option>
          </select>
        </div>
        <p class="text-lg">
          Всего: <span class="font-semibold">54 321 ₽</span>
        </p>
      </div>

      <div
        class="flex flex-col gap-3 mt-7 overflow-auto max-h-[calc(100vh-310px)]"
      >
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </div>
    </div>

    <Button text="Назад" class="border border-black" isWhite @click="back" />
  </div>
</template>
