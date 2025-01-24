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
    <h2 class="text-3xl text-center font-bold">Вывод средств</h2>

    <div class="mt-7">
      <div class="mt-2">
        <input
          required
          v-model="money"
          type="text"
          name="money"
          class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
          placeholder="Сумма (₽)"
        />
      </div>
      <div class="flex justify-between w-full text-xs mt-2 px-2">
        <p>Доступно: 123 456 ₽</p>
        <p>Останется: 123 456 ₽</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 mt-6 mb-6">
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
    <Button
      text="Назад"
      class="border border-black mt-4"
      isWhite
      @click="back"
    />
  </div>
</template>
