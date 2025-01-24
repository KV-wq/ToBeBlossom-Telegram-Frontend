<script setup>
import Button from "../components/Button.vue";
import router from "../router/router";

const savePersonal = () => {};
const back = () => {
  router.back();
};
</script>

<template>
  <div class="container" data-aos="fade-right" data-aos-duration="500">
    <h2 class="text-2xl font-bold">Добавление счета</h2>

    <form class="mt-4">
      <div>
        <label for="fullname" class="block text-gray-900 font-medium text-xl"
          >ФИО</label
        >
        <div class="mt-2">
          <input
            value="Иванов Иван Иванович"
            readonly
            type="text"
            name="fullname"
            class="block w-full text-xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none"
          />
        </div>
      </div>

      <div class="mt-4 mb-6">
        <div class="flex select-none">
          <label class="flex items-center justify-center cursor-pointer radio">
            <input class="hidden peer" name="radio" type="radio" checked />
            <span
              class="relative text-lg font-medium text-gray-500 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-black peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-black/70 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-black before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
              >Самозанятый</span
            >
          </label>

          <label
            class="flex items-center justify-center flex-grow cursor-pointer radio"
          >
            <input class="hidden peer" name="radio" type="radio" />
            <span
              class="relative text-lg font-medium text-gray-500 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-black peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-black/70 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-black before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
              >Физ. лицо</span
            >
          </label>
          <label class="flex items-center justify-center cursor-pointer radio">
            <input class="hidden peer" name="radio" type="radio" />
            <span
              class="relative text-lg font-medium text-gray-500 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-black peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-black/70 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-black before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
              >ИП</span
            >
          </label>
        </div>
      </div>

      <div class="mb-4">
        <label for="bik" class="block text-gray-900 font-medium text-xl"
          >БИК</label
        >
        <div class="mt-2">
          <input
            required
            type="number"
            name="bik"
            class="block w-full text-xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="rs" class="block text-gray-900 font-medium text-xl"
          >Р/С (начинается на 407)</label
        >
        <div class="mt-2">
          <input
            required
            type="number"
            name="rs"
            class="block w-full text-xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="score" class="block text-gray-900 font-medium text-xl"
          >Корреспондентский счет</label
        >
        <div class="mt-2">
          <input
            required
            type="number"
            name="score"
            class="block w-full text-xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="bank" class="block text-gray-900 font-medium text-xl"
          >Наименование банка</label
        >
        <div class="mt-2">
          <input
            required
            type="text"
            name="bank"
            class="block w-full text-xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none"
          />
        </div>
      </div>

      <Button text="Сохранить" @click="back" class="w-full mt-8" />
    </form>

    <Button text="Назад" class="border border-black" isWhite @click="back" />
  </div>
</template>
