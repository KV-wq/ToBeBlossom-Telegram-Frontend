<script setup>
import { ref } from "vue";
import router from "../router/router";

const selectedPeriod = ref("all");
const searchQuery = ref("");

const periods = [
  { value: "all", label: "За все время" },
  { value: "today", label: "Сегодня" },
  { value: "week", label: "Эта неделя" },
  { value: "month", label: "Этот месяц" },
  { value: "month30", label: "За 30 дней" },
];

const stats = {
  orders: {
    total: 1654789,
    count: 126,
    avgCheck: 13133,
    commission: 54789,
    commissionPercent: 7.75,
    growth: 12.5,
  },
};

const orders = [
  {
    id: "123456789",
    date: "23.01.25",
    details: [
      { type: "order", text: "3 товара • 14 231 ₽ • -7%" },
      { type: "purchase", text: "Выкуп: 2 товара • 10 123 ₽" },
      { type: "return", text: "Возврат: 1 товар • 4 123 ₽" },
      { type: "payment", text: "Начислено: 2 123 ₽ (15%)" },
    ],
    status: "paid",
    promoCode: "PROMO17",
  },
  {
    id: "123456790",
    date: "22.01.25",
    details: [{ type: "order", text: "2 товара • 8 450 ₽ • -10%" }],
    status: "processing",
    promoCode: "PROMO10",
  },
  {
    id: "234567901",
    date: "11.01.25",
    details: [
      { type: "order", text: "3 товара • 10 231 ₽ • -7%" },
      { type: "purchase", text: "Выкуп: 3 товара • 10 123 ₽" },
      { type: "payment", text: "Начислено: 1 567 ₽ (15%)" },
    ],
    status: "paid",
    promoCode: "PROMO19",
  },
];

const formatMoney = (value) => value.toLocaleString() + " ₽";
</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <!-- Header -->
    <div class="flex items-center mb-6">
      <button
        @click="() => router.push('/home')"
        class="p-2 hover:bg-gray-50 rounded-xl"
      >
        <img src="../assets/Icons/arrow.svg" class="w-6 h-6 rotate-90" />
      </button>
      <h1 class="text-xl font-medium text-gray-900 ml-3">Статистика продаж</h1>
    </div>

    <!-- Summary Card -->
    <div class="bg-white rounded-2xl p-5 mb-6">
      <div class="grid grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <h3 class="text-lg font-medium text-gray-900">
            {{ formatMoney(stats.orders.total) }}
          </h3>
          <p class="text-sm text-gray-500">Общая выручка</p>
        </div>

        <div>
          <div class="flex items-baseline gap-2">
            <h3 class="text-lg font-medium text-gray-900">
              {{ formatMoney(stats.orders.commission) }}
            </h3>
            <span class="text-sm text-green-500"
              >+{{ stats.orders.growth }}%</span
            >
          </div>
          <p class="text-sm text-gray-500">Ваши начисления</p>
        </div>

        <div class="col-span-2 pt-4 border-t">
          <div class="flex justify-between text-sm">
            <span class="text-gray-500">Заказов: {{ stats.orders.count }}</span>
            <span class="text-gray-500"
              >Средний чек: {{ formatMoney(stats.orders.avgCheck) }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <select
        v-model="selectedPeriod"
        class="flex-1 px-3 py-2 bg-white rounded-xl border border-gray-200 focus:outline-gray-600"
      >
        <option
          v-for="period in periods"
          :key="period.value"
          :value="period.value"
        >
          {{ period.label }}
        </option>
      </select>

      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск заказа или промокода"
        class="flex-1 px-3 py-2 bg-white rounded-xl border border-gray-200 focus:outline-gray-600"
      />
    </div>

    <!-- Orders -->
    <div class="space-y-4 mb-10">
      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-white rounded-2xl p-4"
      >
        <div class="flex justify-between items-center mb-3">
          <span class="font-medium text-gray-900">#{{ order.id }}</span>
          <span class="text-sm text-gray-500">{{ order.date }}</span>
        </div>

        <div class="space-y-2 mb-4">
          <p
            v-for="(detail, idx) in order.details"
            :key="idx"
            :class="{
              'text-gray-600': detail.type === 'order',
              'text-blue-700': detail.type === 'purchase',
              'text-red-600': detail.type === 'return',
              'text-green-600': detail.type === 'payment',
            }"
            class="text-sm"
          >
            {{ detail.text }}
          </p>
        </div>

        <div class="flex justify-between">
          <span
            class="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full"
          >
            {{ order.promoCode }}
          </span>
          <span
            :class="{
              'bg-green-100 text-green-700': order.status === 'paid',
              'bg-orange-100 text-orange-700': order.status === 'processing',
            }"
            class="px-3 py-1 text-sm rounded-full"
          >
            {{ order.status === "paid" ? "Начислен" : "В обработке" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
