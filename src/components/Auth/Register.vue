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
        <div data-aos="fade-left" data-aos-duration="500">
          <input
            required
            type="text"
            name="firstname"
            class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
            placeholder="Имя"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="500">
          <input
            required
            type="text"
            name="secondname"
            class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
            placeholder="Фамилия"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="500">
          <input
            required
            type="text"
            name="lastname"
            class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
            placeholder="Отчество (при наличии)"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="500">
          <input
            required
            type="email"
            name="email"
            class="block w-full text-gray-800 text-lg rounded-2xl bg-white py-3 px-4 border border-transparent border-gray-200 focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-gray-500 shadow-sm placeholder-gray-400"
            placeholder="Email"
          />
        </div>
      </div>
      <!-- 
      <p class="text-xs text-gray-300 text-center mt-2">
        ФИО нелья будет изменить
      </p> -->

      <!-- <label
        data-aos="fade-right"
        data-aos-duration="500"
        class="mt-8 mb-4 relative text-black flex cursor-pointer gap-3"
        for="tick"
      >
        <input
          class="peer appearance-none"
          id="tick"
          name="tick"
          type="checkbox"
          v-model="checked"
          required
        />
        <span
          class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-y-1/2 rounded-[0.25em] border-[2px] border-black"
        >
        </span>
        <svg
          viewBox="0 0 69 89"
          class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
          fill="none"
          height="89"
          width="69"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
            stroke-width="6px"
            stroke="black"
            pathLength="100"
          ></path>
        </svg>

        <p
          class="text-sm text-gray-700 font-extralight [user-select:none] ml-7"
        >
          Даю
          <span class="underline"
            >согласие на обработку персональных <br />данных</span
          >
          и соглашаюсь
          <span class="underline">с офертой</span>
        </p>
      </label> -->
      <p class="text-center font-extralight text-xs text-gray-600 mt-6">
        Нажимая кнопку "Продолжить", вы даете
        <span class="text-black underline"
          >согласие на обработку персональных данных</span
        >
        и соглашаетесь с <span class="text-black underline">офертой</span>
      </p>
      <Button text="Продолжить" class="w-full mt-3" type="submit" />
    </form>

    <p class="text-center font-light text-gray-600 mt-3">
      Уже есть аккаунт? <span class="text-black font-semibold">Войти</span>
    </p>
    <!-- <div class="w-full h-64"></div> -->
  </div>
</template>
