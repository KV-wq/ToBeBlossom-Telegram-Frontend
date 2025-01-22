<script setup>
import { ref } from "vue";
import Button from "../Button.vue";
import { useAuthStore } from "../../store/auth";
const formattedNumber = ref("");
const unformattedNumber = ref("");

const handleInput = (event) => {
  let value = event.target.value.replace(/\D/g, "");
  if (value.length > 10) value = value.substring(0, 10);
  unformattedNumber.value = value;
  formattedNumber.value = formatNumber(value);
};

const formatNumber = (value) => {
  if (value.length === 0) return "";
  if (value.length <= 3) return `(${value}`;
  if (value.length <= 6) return `(${value.slice(0, 3)}) ${value.slice(3)}`;
  if (value.length <= 8)
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
    6,
    8
  )}-${value.slice(8)}`;
};

const submitForm = () => {
  useAuthStore().incrementStage();
};
</script>

<template>
  <div class="container" data-aos="fade-right" data-aos-duration="500">
    <h2 class="text-4xl font-bold text-start">
      Введите<br />
      номер телефона
    </h2>

    <form class="mx-auto mt-16" @submit="submitForm">
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
        >
          <span class="text-gray-800 text-2xl font-semibold">+7</span>
        </div>
        <input
          type="text"
          id="phone-input"
          aria-describedby="phone-helper-text"
          class="border border-black text-gray-800 text-2xl font-semibold rounded-lg block w-full ps-12 p-2.5 placeholder:text-gray-500 placeholder:font-semibold transition-all"
          v-model="formattedNumber"
          @input="handleInput"
          placeholder="(000) 555-55-55"
          pattern="^\(\d{3}\) \d{3}-\d{2}-\d{2}$"
          required
        />
      </div>
      <Button
        text="Продолжить"
        :disabled="formattedNumber.length !== 15"
        class="mt-5"
      />
    </form>
  </div>
</template>

<style scoped></style>
