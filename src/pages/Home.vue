<script setup>
import Button from "../components/Button.vue";
import router from "../router/router";
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-start">
      <img
        src="../assets/logo.svg"
        class="w-[275px] max-[380px]:w-[250px] max-[360px]:w-[220px]"
        height="50"
      />
      <img
        src="../assets/Icons/menu.svg"
        width="40"
        height="40"
        @click="() => router.push('/profile')"
      />
    </div>
    <div
      class="text-3xl font-semibold flex gap-2 max-[370px]:text-2xl mx-auto items-end mt-7 mb-12"
    >
      <h2 class="text-nowrap">Иванов Иван Иванович</h2>
      <span
        ><img src="../assets/Icons/verified.svg" width="30" height="30"
      /></span>
    </div>

    <div class="grid grid-cols-2 gap-5 mb-6">
      <div
        class="w-full h-28 bg-lime-100 py-2 px-3 rounded"
        data-aos="flip-right"
        data-aos-duration="300"
      >
        <p class="font-semibold text-lg">Начислено</p>

        <p class="font-semibold">1 234 567 ₽</p>
        <p class="text-sm text-gray-900">Вывели: 234 567 ₽</p>
        <p class="text-sm text-gray-900">Возвраты: 234 567 ₽</p>
      </div>

      <div
        class="w-full h-28 bg-green-100 py-2 px-3 rounded"
        data-aos="flip-left"
        data-aos-duration="500"
      >
        <p class="font-semibold text-lg">К выводу</p>

        <p class="font-semibold">234 567 ₽</p>
        <p class="text-sm text-gray-900">Скоро: 234 567 ₽</p>
      </div>

      <div
        class="w-full h-28 bg-blue-100 py-2 px-3 rounded"
        data-aos="flip-right"
        data-aos-duration="700"
      >
        <p class="font-semibold text-lg">Продажи</p>

        <p class="text-sm text-gray-900">Заказов: 17</p>
        <p class="text-sm text-gray-900">AVG чек: 23 000 ₽</p>
        <p class="text-sm text-gray-900">UPT: 1.7</p>
      </div>

      <div
        class="w-full h-28 bg-red-100 py-2 px-3 rounded"
        data-aos="flip-left"
        data-aos-duration="900"
      >
        <p class="font-semibold text-lg">Возвраты</p>

        <p class="text-sm text-gray-900">Полные: 7</p>
        <p class="text-sm text-gray-900">Частичные: 3</p>
        <p class="text-sm text-gray-900">Товаров: 12</p>
      </div>

      <div
        class="w-full h-28 bg-yellow-100 py-2 px-3 rounded"
        data-aos="flip-right"
        data-aos-duration="1100"
      >
        <p class="font-semibold text-lg">Промокоды</p>

        <p class="text-sm text-gray-900">Выпущено: 7</p>
        <p class="text-sm text-gray-900">Активных: 2</p>
        <p class="text-sm text-gray-900">Не активных: 3</p>
      </div>
    </div>

    <Button
      text="Перейти в профиль"
      isWhite
      class="w-full border border-black/35"
      @click="() => router.push('/profile')"
    />
    <Button
      text="Статистика продаж"
      class="w-full bg-yellow-200 text-black border border-black/40"
      @click="() => router.push('/statistics')"
    />
    <Button
      text="Мои промокоды"
      class="w-full bg-gray-900"
      @click="() => router.push('/promocodes')"
    />
  </div>
</template>
