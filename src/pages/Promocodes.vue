<script setup>
import router from "../router/router";
import Button from "../components/Button.vue";
import PromoCard from "../components/Promocode/PromoCard.vue";
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
      Мои промокоды
    </h2>

    <Button
      text="Создать промокод"
      class="w-full !my-6"
      @click="() => router.push('/add-promocode')"
    />

    <div class="flex flex-col gap-5">
      <PromoCard v-for="index in 3" :key="index" :promoId="index" />
    </div>
  </div>
</template>
