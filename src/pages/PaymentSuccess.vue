<script setup>
import Button from "../components/Button.vue";
import router from "../router/router";

const back = () => {
  router.push("/profile");
};
</script>

<template>
  <div
    class="container text-center flex flex-col gap-5 items-center"
    data-aos="fade-down"
  >
    <h2 class="text-xl font-bold">Заявка на вывод принята</h2>

    <p class="text-xl">Сумма: <span class="font-semibold">123 456 ₽</span></p>

    <p class="text-lg font-md">
      Деньги поступят в <br />
      течении 3-х ближайших<br />
      рабочих дней
    </p>

    <img src="../assets/success.svg" width="120" />

    <Button
      text="В профиль"
      class="border border-black"
      isWhite
      @click="back"
    />
  </div>
</template>
