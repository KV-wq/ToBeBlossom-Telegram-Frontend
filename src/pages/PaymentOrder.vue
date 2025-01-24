<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import PaymentCard from "../components/Profile/PaymentCard.vue";
import router from "../router/router";

const selectedMethod = ref(null);
const money = ref("");

const back = () => {
  router.back();
};
const createOrder = () => {
  router.push("/payment-success");
};
</script>

<template>
  <div class="container" data-aos="fade-right" data-aos-duration="500">
    <h2 class="text-xl text-center font-bold">Вывод средств</h2>

    <div class="mt-5">
      <label for="lastname" class="block text-gray-900 font-medium text-xl"
        >Сумма (₽)</label
      >
      <div class="mt-2">
        <input
          v-model="money"
          type="text"
          name="lastname"
          class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none"
        />
      </div>
      <div class="flex justify-between w-full text-xs mt-0.5">
        <p>Доступно: 123 456 ₽</p>
        <p>Останется: 123 456 ₽</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 mt-6 mb-4">
      <PaymentCard
        noOptions
        :class="
          selectedMethod === 1
            ? 'border-black/90 border-[3px]'
            : 'border-[3px] border-black/25'
        "
        @click="() => (selectedMethod = 1)"
      />
      <PaymentCard
        noOptions
        :class="
          selectedMethod === 2
            ? 'border-black/90 border-[3px]'
            : 'border-[3px] border-black/25'
        "
        @click="() => (selectedMethod = 2)"
      />
    </div>

    <Button
      text="Вывести"
      class="w-full"
      @click="createOrder"
      :disabled="selectedMethod === null || money === ''"
    />
    <Button text="Назад" class="border border-black" isWhite @click="back" />
  </div>
</template>
