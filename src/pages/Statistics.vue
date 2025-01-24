<script setup>
import router from "../router/router";
</script>

<template>
  <div class="container relative">
    <img
      src="../assets/icons/arrow.svg"
      class="absolute size-7 rotate-90"
      width="30"
      height="30"
      @click="() => router.push('/home')"
    />

    <h2 class="text-3xl max-[380px]:text-2xl text-center font-semibold -mt-1">
      Статистика продаж
    </h2>

    <div class="grid grid-cols-3 gap-2 mt-6">
      <div>
        <select
          id="date"
          class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2"
        >
          <option value="today" selected>Сегодня</option>
          <option value="week">Эта неделя</option>
          <option value="month">Этот месяц</option>
          <option value="30d">За 30 дней</option>
        </select>
      </div>
      <div>
        <select
          id="date-sort"
          class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2"
        >
          <option value="date-order" selected>По дате заказа</option>
          <option value="date-buy">По дате выкупа</option>
          <option value="date-pay">По дате начисления</option>
        </select>
      </div>
      <div>
        <select
          id="status"
          class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2"
        >
          <option value="all" selected>Все заказы</option>
          <option value="created">Созданные</option>
          <option value="work">В работе</option>
          <option value="delivery">В доставке</option>
          <option value="reject">Отмененные</option>
          <option value="buy">Выкупленные</option>
          <option value="pay">Начисленные</option>
        </select>
      </div>
    </div>

    <div class="flex gap-2 mt-2">
      <div
        class="flex-1 max-[376px]:text-[0.65rem] text-[0.7rem] flex flex-col h-22 justify-center gap-2"
      >
        <p class="text-gray-600">Сумма всех заказов в периоде: 1 654 789 ₽</p>
        <p class="text-gray-600">Сумма выкупов в периоде: 1 654 789 ₽</p>
        <p class="text-gray-600">
          Начислено по заказам в периоде:
          <span class="font-semibold">54 789 ₽</span> (7,75%)
        </p>
      </div>

      <div>
        <input
          type="number"
          placeholder="Номер заказа"
          class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-[27.5vw] h-9 mb-2 text-center"
        />
        <input
          type="text"
          placeholder="PROMO CODE"
          class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-[27.5vw] h-9 text-center"
        />
      </div>
    </div>

    <div class="flex flex-col gap-3 mt-8">
      <div
        class="w-full relative px-3 py-2 border border-black/75 h-auto text-xs pb-12 bg-gray-50 rounded overflow-hidden"
      >
        <p><span class="font-semibold">#123456789</span> от 23.01.25</p>
        <p>Заказано 3 товара со скидкой 7% на сумму 14 231 ₽</p>

        <p class="text-blue-800">
          12.01.25 ВЫКУП 2 товара со скидкой 7% на сумму 10 123 ₽
        </p>
        <p class="text-red-700">12.01.25 ВОЗВРАТ 1 товара на сумму 4 123 ₽</p>
        <p class="">12.01.25 ИОГО выкуплено 10 123 ₽</p>
        <p class="text-green-500">12.01.25 Начислено 15% от выкупа - 2 123 ₽</p>

        <div
          class="absolute right-0 bottom-0 h-9 w-24 bg-lime-200 flex items-center justify-center"
        >
          <p>Начислен</p>
        </div>
        <div
          class="absolute left-0 bottom-0 h-9 w-24 bg-orange-200 flex items-center justify-center"
        >
          <p>PROMO17</p>
        </div>
      </div>

      <div
        class="w-full relative px-3 py-2 border border-black/75 h-auto text-xs pb-12 bg-gray-50 rounded overflow-hidden"
      >
        <p><span class="font-semibold">#123456789</span> от 12.01.25</p>
        <p>Заказано 3 товара со скидкой 7% на сумму 34 567 ₽</p>

        <div
          class="absolute right-0 bottom-0 h-9 w-24 bg-red-200 flex items-center justify-center"
        >
          <p>В работе</p>
        </div>
        <div
          class="absolute left-0 bottom-0 h-9 w-24 bg-orange-200 flex items-center justify-center"
        >
          <p>PROMO17</p>
        </div>
      </div>

      <div
        class="w-full relative px-3 py-2 border border-black/75 h-auto text-xs pb-12 bg-gray-50 rounded overflow-hidden"
      >
        <p><span class="font-semibold">#123456789</span> от 23.01.25</p>
        <p>Заказано 3 товара со скидкой 7% на сумму 14 231 ₽</p>

        <p class="text-blue-800">
          12.01.25 ВЫКУП 2 товара со скидкой 7% на сумму 10 123 ₽
        </p>
        <p class="text-red-700">12.01.25 ВОЗВРАТ 1 товара на сумму 4 123 ₽</p>
        <p class="">12.01.25 ИОГО выкуплено 10 123 ₽</p>
        <p class="text-green-500">12.01.25 Начислено 15% от выкупа - 2 123 ₽</p>

        <div
          class="absolute right-0 bottom-0 h-9 w-24 bg-lime-200 flex items-center justify-center"
        >
          <p>Начислен</p>
        </div>
        <div
          class="absolute left-0 bottom-0 h-9 w-24 bg-orange-200 flex items-center justify-center"
        >
          <p>PROMO20</p>
        </div>
      </div>

      <div
        class="w-full relative px-3 py-2 border border-black/75 h-auto text-xs pb-12 bg-gray-50 rounded overflow-hidden"
      >
        <p><span class="font-semibold">#123456789</span> от 12.01.25</p>
        <p>Заказано 3 товара со скидкой 7% на сумму 34 567 ₽</p>

        <div
          class="absolute right-0 bottom-0 h-9 w-24 bg-red-200 flex items-center justify-center"
        >
          <p>В работе</p>
        </div>
        <div
          class="absolute left-0 bottom-0 h-9 w-24 bg-orange-200 flex items-center justify-center"
        >
          <p>PROMO17</p>
        </div>
      </div>
    </div>
  </div>
</template>
