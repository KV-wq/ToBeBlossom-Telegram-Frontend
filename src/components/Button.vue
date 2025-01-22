<script setup>
const props = defineProps({
  text: String,
  disabled: Boolean,
});
</script>

<template>
  <button
    :disabled="disabled"
    class="w-[150px] font-semibold bg-black disabled:bg-gray-300 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md text-[#fff] active:scale-90"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
