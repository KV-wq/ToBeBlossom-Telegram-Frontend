<script setup>
import { useAuthStore } from "../../store/auth";
import Button from "../Button.vue";
import { ref, onMounted, onUnmounted } from "vue";

const timerValue = ref(45);
const inputRefs = ref([]);
const digits = ref(["", "", "", ""]);
const code = ref("");

const updateCode = () => {
  code.value = digits.value.join("");
};
onMounted(() => updateCode());

const handleInput = (event, index) => {
  const value = event.target.value.replace(/[^0-9]/g, "").substring(0, 1);
  if (value.length > 1) {
    value = value.substring(0, 1);
    event.target.value = value;
  }
  digits.value[index] = value;
  updateCode();
  if (value && index < inputRefs.value.length - 1) {
    inputRefs.value[index + 1].focus();
  }
};

const handleKeyDown = (event, index) => {
  if (event.key === "Backspace" && !digits.value[index] && index > 0) {
    inputRefs.value[index - 1].focus();
  }
};

let timerInterval = null;

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timerValue.value > 0) {
      timerValue.value--;
    } else {
      stopTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <div class="container">
    <h2 class="text-4xl font-bold text-start">
      Подтвердите <br />
      номер
    </h2>

    <p className="text-gray-500 mt-2 mb-8">Введите код из SMS-сообщения</p>

    <div data-aos="fade-up" data-aos-duration="600">
      <p class="text-center text-3xl font-semibold mt-16">+7 (000) 555-55-55</p>
      <p class="text-black/70 text-center mt-4" v-if="timerValue > 0">
        <span class="underline"> Отправить SMS повторно</span> <br />
        можно через {{ timerValue }} сек.
      </p>
      <p class="text-black text-center mt-5 mb-[68px]" v-else>
        <span class="underline"> Отправить SMS повторно</span> <br />
      </p>

      <div class="flex gap-2 justify-center my-12">
        <input
          v-for="(digit, index) in digits"
          :key="index"
          type="number"
          maxlength="1"
          @input="handleInput($event, index)"
          @keydown="handleKeyDown($event, index)"
          ref="inputRefs"
          class="w-16 h-16 text-center border border-gray-300 rounded-lg px-2 text-lg focus:outline-gray-500"
          :value="digit"
        />
      </div>

      <Button
        text="Подтвердить"
        class="mx-auto px-36"
        :disabled="code.length !== 4"
        @click="() => useAuthStore().incrementStage()"
      />

      <p
        class="text-black/70 text-center mt-4 underline"
        @click="() => useAuthStore().decrementStage()"
      >
        Изменить номер телефона
      </p>
    </div>
  </div>
</template>
