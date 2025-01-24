<script setup>
import { ref, computed } from "vue";

import Button from "../components/Button.vue";
import router from "../router/router";

const back = () => {
  router.back();
};

const selectedPeriod = ref("all");

const periods = [
  { value: "all", label: "За все время" },
  { value: "today", label: "Сегодня" },
  { value: "week", label: "Эта неделя" },
  { value: "month", label: "Этот месяц" },
  { value: "month30", label: "За 30 дней" },
];

const withdrawals = [
  {
    id: 1,
    amount: 38000,
    date: "2024-01-01",
    status: "completed",
    account: "Сбербанк •••• 4567",
    type: "individual",
  },
  {
    id: 2,
    amount: 45200,
    date: "2024-01-11",
    status: "processing",
    account: "Тинькофф •••• 8901",
    type: "person",
  },
  {
    id: 3,
    amount: 36800,
    date: "2025-01-22",
    status: "completed",
    account: "Сбербанк •••• 4567",
    type: "individual",
  },
  {
    id: 4,
    amount: 16800,
    date: "2025-01-22",
    status: "failed",
    account: "ВТБ •••• 4567",
    type: "person",
  },
];

const statusLabels = {
  completed: "Выполнен",
  processing: "В обработке",
  failed: "Отклонен",
};

const statusStyles = {
  completed: "bg-green-100 text-green-700",
  processing: "bg-blue-100 text-blue-700",
  failed: "bg-red-100 text-red-700",
};

const getDateRange = (period) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (period) {
    case "today":
      return today;
    case "week": {
      const monday = new Date(today);
      monday.setDate(today.getDate() - today.getDay() + 1);
      return monday;
    }
    case "month":
      return new Date(today.getFullYear(), today.getMonth(), 1);
    case "month30": {
      const thirtyDaysAgo = new Date(today);
      thirtyDaysAgo.setDate(today.getDate() - 30);
      return thirtyDaysAgo;
    }
    default:
      return null;
  }
};

const sortedWithdrawals = computed(() => {
  const startDate = getDateRange(selectedPeriod.value);

  return withdrawals
    .filter((w) => {
      if (!startDate) return true;
      return new Date(w.date) >= startDate;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

const totalAmount = computed(() =>
  withdrawals.reduce((sum, w) => sum + w.amount, 0)
);

const formatAmount = (value) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
</script>

<template>
  <div class="bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h3 class="text-xl font-medium text-gray-900">История выводов</h3>
        <p class="text-sm text-gray-500 mt-1">
          Всего выведено:
          <span class="font-semibold text-gray-900">{{
            formatAmount(totalAmount)
          }}</span>
        </p>
      </div>
      <select
        v-model="selectedPeriod"
        class="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option
          v-for="period in periods"
          :key="period.value"
          :value="period.value"
        >
          {{ period.label }}
        </option>
      </select>
    </div>

    <div class="space-y-4 max-h-[calc(100vh-200px)] overflow-auto">
      <div
        v-for="withdrawal in sortedWithdrawals"
        :key="withdrawal.id"
        class="bg-white rounded-xl p-4"
      >
        <div class="flex justify-between items-start">
          <div>
            <p class="text-lg font-medium text-gray-900">
              {{ formatAmount(withdrawal.amount) }}
            </p>
            <div class="flex items-center mt-1">
              <span class="text-sm text-gray-500">{{
                withdrawal.account
              }}</span>
              <span
                class="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
              >
                {{ withdrawal.type === "individual" ? "ИП" : "Физлицо" }}
              </span>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-medium text-gray-900">
              {{ formatDate(withdrawal.date) }}
            </p>
            <span
              :class="[
                'inline-block px-2 py-1 text-xs rounded-full mt-2',
                statusStyles[withdrawal.status],
              ]"
            >
              {{ statusLabels[withdrawal.status] }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="sortedWithdrawals.length === 0"
      class="text-center py-8 text-gray-500"
    >
      Нет операций за выбранный период
    </div>
    <Button
      text="Назад"
      class="border border-black/50 w-full mt-5"
      isWhite
      @click="back"
    />
  </div>
</template>
