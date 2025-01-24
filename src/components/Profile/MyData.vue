<script setup>
import { ref } from "vue";
import Button from "../Button.vue";

const checked = ref(false);

const updateData = () => {
  window.location.reload();
};
</script>

<template>
  <div>
    <h2 class="text-4xl font-bold text-start">Мои данные</h2>

    <form class="mt-5" @submit="updateData">
      <div class="flex flex-col gap-4">
        <div>
          <label for="lastname" class="block text-gray-900 font-medium text-xl"
            >Фамилия</label
          >
          <div class="mt-2">
            <input
              value="Иванов"
              readonly
              type="text"
              name="lastname"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label for="name" class="block text-gray-900 font-medium text-xl"
            >Имя</label
          >
          <div class="mt-2">
            <input
              value="Иван"
              readonly
              type="text"
              name="name"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label for="fathname" class="block text-gray-900 font-medium text-xl"
            >Отчество</label
          >
          <div class="mt-2">
            <input
              value="Иванович"
              readonly
              type="text"
              name="fathname"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-gray-900 font-medium text-xl"
            >E-mail</label
          >
          <div class="mt-2">
            <input
              value="ivanov@mail.ru"
              type="email"
              name="email"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
        <div>
          <label for="tel" class="block text-gray-900 font-medium text-xl"
            >Телефон</label
          >
          <div class="mt-2">
            <input
              value="+7 (000) 555-55-55"
              type="tel"
              name="tel"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div class="my-2">
          <div class="flex select-none">
            <label
              class="flex items-center justify-center cursor-pointer radio"
            >
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
            <label
              class="flex items-center justify-center cursor-pointer radio"
            >
              <input class="hidden peer" name="radio" type="radio" />
              <span
                class="relative text-lg font-medium text-gray-500 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-black peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-black/70 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-black before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
                >ИП</span
              >
            </label>
          </div>
        </div>

        <div>
          <label for="inn" class="block text-gray-900 font-medium text-xl"
            >ИНН</label
          >
          <div class="mt-2">
            <input
              value="ivanov@mail.ru"
              type="number"
              name="inn"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
        <div>
          <label for="snils" class="block text-gray-900 font-medium text-xl"
            >СНИЛС</label
          >
          <div class="mt-2">
            <input
              type="number"
              name="snils"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
        <div>
          <label for="adress" class="block text-gray-900 font-medium text-xl"
            >Адрес регистрации в паспорте</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="adress"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
        <div>
          <label for="ogrnip" class="block text-gray-900 font-medium text-xl"
            >ОГРНИП</label
          >
          <div class="mt-2">
            <input
              readonly
              type="text"
              name="ogrnip"
              class="block w-full text-2xl rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 outline-none bg-gray-100"
            />
          </div>
        </div>
      </div>

      <label
        class="mt-8 mb-4 relative text-black flex cursor-pointer gap-3"
        for="tick"
      >
        <input
          class="peer appearance-none"
          id="tick"
          name="tick"
          type="checkbox"
          v-model="checked"
        />
        <span
          class="absolute left-0 top-1/2 h-[1.6em] w-[1.6em] -translate-y-1/2 rounded-[0.25em] border-[2px] border-black"
        >
        </span>
        <svg
          viewBox="0 0 69 89"
          class="absolute left-0 top-1/2 h-[1.6em] w-[1.6em] -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
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
          class="text-xs text-gray-700 font-extralight [user-select:none] ml-7"
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
        text="Сохранить"
        class="px-auto w-full"
        :disabled="!checked"
        type="submit"
      />
    </form>
  </div>
</template>
