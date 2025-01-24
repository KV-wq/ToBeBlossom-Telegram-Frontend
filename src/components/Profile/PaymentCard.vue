<script setup>
import { ref } from "vue";
import Button from "../Button.vue";

const props = defineProps({
  noOptions: Boolean,
});

const deleteIsVisible = ref(false);
</script>

<template>
  <div
    class="bg-white p-3 rounded-lg text-black text-center text-xs relative"
    :data-aos="noOptions ? '' : 'flip-left'"
    data-aos-duration="500"
  >
    <div class="flex justify-between" :class="{ '!justify-center': noOptions }">
      <img
        src="../../assets/Icons/bin.svg"
        class="size-5"
        @click="() => (deleteIsVisible = true)"
        v-if="!noOptions"
      />
      <img src="../../assets/Icons/bank.svg" class="size-10" />
      <img
        src="../../assets/Icons/pencil.svg"
        class="size-5"
        v-if="!noOptions"
      />
    </div>

    <p class="mt-2 font-semibold">Физ. лицо, самозанятый</p>
    <p class="mt-2 text-nowrap">123 456 ..... 7890</p>

    <div
      class="absolute bg-stone-900 text-white inset-0 rounded-lg px-2"
      v-if="deleteIsVisible"
      data-aos="flip-right"
      data-aos-duration="400"
    >
      <p class="font-semibold mt-5">Вы точно хотите удалить?</p>
      <div class="flex gap-1 mt-2">
        <Button isWhite class="h-7" text="Да" />
        <Button
          isWhite
          class="h-7"
          text="Нет"
          @click="() => (deleteIsVisible = false)"
        />
      </div>
    </div>
  </div>
</template>
