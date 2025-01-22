<template>
  <div
    class="h-screen w-screen flex flex-col gap-10 justify-center items-center relative"
  >
    <div
      class="flex flex-row gap-4 absolute transition-opacity duration-[1.2s] opacity-0 scale-90"
      :class="{ 'opacity-100 scale-100': isLoaderVisible }"
    >
      <div class="w-8 h-8 rounded-full bg-stone-900 animate-bounce"></div>
      <div
        class="w-8 h-8 rounded-full bg-stone-900 animate-bounce [animation-delay:-.3s]"
      ></div>
      <div
        class="w-8 h-8 rounded-full bg-stone-900 animate-bounce [animation-delay:-.5s]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoaderVisible = ref(false);

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  isLoaderVisible.value = true;
});
</script>
