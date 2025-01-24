<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import router from "../router/router";

const selectedType = ref("self_employed");
const bankTypes = [
  { id: "self_employed", label: "Самозанятый" },
  { id: "person", label: "Физ. лицо" },
  { id: "individual", label: "ИП" },
];

const savePersonal = () => {};
const back = () => {
  router.back();
};
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto">
    <h2 class="text-2xl font-medium text-gray-900">Добавление счета</h2>

    <form class="mt-8 space-y-6">
      <!-- ФИО -->
      <div>
        <label class="text-sm font-medium text-gray-700">ФИО</label>
        <input
          value="Иванов Иван Иванович"
          readonly
          type="text"
          class="mt-2 w-full px-3 py-2 bg-gray-100 text-gray-900 rounded-xl border-0 outline-none"
        />
      </div>

      <!-- Тип счета -->
      <div>
        <label class="text-sm font-medium text-gray-700">Тип счета</label>
        <div class="mt-2 grid grid-cols-3 gap-4">
          <button
            v-for="type in bankTypes"
            :key="type.id"
            type="button"
            @click="selectedType = type.id"
            :class="[
              'px-auto py-2 rounded-xl text-sm font-medium transition-colors',
              selectedType === type.id
                ? 'bg-black/80 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50',
            ]"
          >
            {{ type.label }}
          </button>
        </div>
      </div>

      <!-- БИК -->
      <div>
        <label class="text-sm font-medium text-gray-700">БИК</label>
        <input
          required
          type="number"
          class="mt-2 w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-gray-700 focus:border-transparent"
          placeholder="000000000"
        />
      </div>

      <!-- Р/С -->
      <div>
        <label class="text-sm font-medium text-gray-700">Р/С</label>
        <div class="relative mt-2">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >407</span
          >
          <input
            required
            type="number"
            class="w-full pl-12 pr-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-gray-700 focus:border-transparent"
            placeholder="00000000000000000"
          />
        </div>
      </div>

      <!-- Корр. счет -->
      <div>
        <label class="text-sm font-medium text-gray-700"
          >Корреспондентский счет</label
        >
        <input
          required
          type="number"
          class="mt-2 w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-gray-700 focus:border-transparent"
          placeholder="00000000000000000000"
        />
      </div>

      <!-- Банк -->
      <div>
        <label class="text-sm font-medium text-gray-700"
          >Наименование банка</label
        >
        <input
          required
          type="text"
          class="mt-2 w-full px-3 py-2 bg-white text-gray-900 rounded-xl border border-gray-200 focus:outline-gray-700 focus:border-transparent"
          placeholder="Введите название банка"
        />
      </div>

      <Button
        text="Сохранить"
        @click="savePersonal"
        class="w-full !mt-12 !-mb-2"
      />
      <Button
        text="Назад"
        class="border border-black w-full mt-0"
        isWhite
        @click="back"
      />
    </form>
  </div>
</template>
