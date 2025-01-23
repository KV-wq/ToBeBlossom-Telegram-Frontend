<script setup>
import { ref } from "vue";
import Button from "../Button.vue";

const checked = ref(false);
</script>

<template>
  <div class="container">
    <h2 class="text-4xl font-bold text-start">Регистрация</h2>

    <form class="mt-5">
      <div class="flex flex-col gap-4">
        <div data-aos="fade-right" data-aos-duration="500">
          <label for="email" class="block text-gray-900 font-medium text-xl"
            >E-mail</label
          >
          <div class="mt-2">
            <input
              type="email"
              name="email"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="500">
          <label for="lastname" class="block text-gray-900 font-medium text-xl"
            >Фамилия</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="lastname"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="500">
          <label for="name" class="block text-gray-900 font-medium text-xl"
            >Имя</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="name"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="500">
          <label for="fathname" class="block text-gray-900 font-medium text-xl"
            >Отчество</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="fathname"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
      </div>

      <label
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
            >согласие на обработку персональных <br />
            данных</span
          >
          и соглашаюсь
          <span class="underline">с офертой</span>
        </p>
      </label>

      <Button
        text="Зарегистрироваться"
        class="px-auto w-full"
        :disabled="!checked"
      />
    </form>
    <div class="w-full h-72"></div>
  </div>
</template>
