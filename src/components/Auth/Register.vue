<script setup>
import { ref } from "vue";
import router from "../../router/router";
import Button from "../Button.vue";

const register = () => {
  router.push("/profile");
};
</script>

<template>
  <div class="container">
    <h2 class="text-4xl font-bold text-start">Создать аккаунт</h2>
    <p className="text-gray-500 mt-2 mb-8">Введите данные для регистрации</p>

    <form class="mt-5" @submit.prevent="register">
      <div class="flex flex-col gap-6">
        <input
          required
          type="text"
          name="firstname"
          class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
          placeholder="Имя"
        />
        <input
          required
          type="text"
          name="secondname"
          class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
          placeholder="Фамилия"
        />
        <input
          required
          type="text"
          name="lastname"
          class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
          placeholder="Отчество (при наличии)"
        />
        <input
          required
          type="email"
          name="email"
          class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
          placeholder="Email"
        />
      </div>

      <p class="text-center font-extralight text-xs text-gray-600 mt-6">
        Нажимая кнопку "Продолжить", вы даете
        <span class="text-black underline"
          >согласие на обработку персональных данных</span
        >
        и соглашаетесь с <span class="text-black underline">офертой</span>
      </p>
      <Button text="Продолжить" class="w-full mt-3" type="submit" />
    </form>

    <!-- <p class="text-center font-light text-gray-600 mt-3">
      Уже есть аккаунт? <span class="text-black font-semibold">Войти</span>
    </p> -->
    <!-- <div class="w-full h-64"></div> -->
  </div>
</template>
