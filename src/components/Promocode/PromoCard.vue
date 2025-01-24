<script setup>
const props = defineProps({
  promoId: Number,
});
</script>

<template>
  <div class="w-full rounded-lg border-2 border-black/85 px-4 py-2 relative">
    <img
      src="../../assets/Icons/copy.svg"
      class="absolute size-9 right-1 active:scale-90 active:translate-x-0.5 active:-translate-y-0.5 transition-transform"
    />
    <p><span class="font-semibold">PROMO32</span> от 12.01.25</p>
    <div class="my-6 flex gap-3">
      <div class="w-full rounded-xl border border-black/85 px-3 py-1">
        <p>Ваш доход</p>
        <p class="text-lg font-semibold">5%</p>
      </div>
      <div class="w-full rounded-xl border border-black/85 px-3 py-1">
        <p>Скидка клиенту</p>
        <p class="text-lg font-semibold">20%</p>
      </div>
    </div>
    <input
      type="text"
      readonly
      value="Действует до 12.02.25"
      class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-full h-9 mb-2 text-center"
    />
    <input
      type="text"
      placeholder="Заметки для себя"
      class="bg-gray-50 border p-2 border-gray-500 text-gray-900 text-sm rounded-lg block w-full h-9 mb-2 text-center"
    />

    <div class="flex mt-6 mb-3 w-full justify-between text-xl">
      <label class="relative flex items-center cursor-pointer">
        <input
          class="sr-only peer"
          :name="'radio-active-' + promoId"
          type="radio"
          :checked="promoId == 2"
        />
        <div
          class="w-6 h-6 bg-transparent border-2 border-red-500 rounded-full peer-checked:bg-red-500 peer-checked:border-red-500 peer-hover:shadow-lg peer-hover:shadow-red-500/50 peer-checked:shadow-lg peer-checked:shadow-red-500/50 transition duration-300 ease-in-out"
        ></div>
        <span class="ml-2 mb-0.5">Не активен</span>
      </label>
      <label class="relative flex items-center cursor-pointer">
        <input
          class="sr-only peer"
          :name="'radio-active-' + promoId"
          type="radio"
          :checked="promoId != 2"
        />
        <div
          class="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"
        ></div>
        <span class="ml-2 mb-0.5">Активен</span>
      </label>
    </div>
  </div>
</template>
