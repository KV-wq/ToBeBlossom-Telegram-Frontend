<script setup>
import Button from "../components/Button.vue";
import PaymentCard from "../components/Profile/PaymentCard.vue";
import MyData from "../components/Profile/MyData.vue";
import router from "../router/router";

const addPersonal = () => {
  router.push("/add-personal");
};
</script>

<template>
  <div class="container relative">
    <img
      src="../assets/icons/arrow.svg"
      class="absolute size-9 rotate-90"
      width="36"
      height="36"
      @click="() => router.push('/home')"
    />

    <div class="flex justify-between items-center px-4 py-2"></div>

    <div class="mx-auto flex flex-col items-center">
      <img
        src="../assets/avatar.jpg"
        class="mb-4 rounded-full"
        width="100"
        height="100"
      />
      <div
        class="text-2xl font-semibold flex gap-2 items-end max-[390px]:text-xl"
      >
        <h2>Иванов Иван Иванович</h2>
        <span
          ><img src="../assets//icons/verified.svg" width="30" height="30"
        /></span>
      </div>

      <div
        class="w-full h-auto bg-black/90 text-white rounded-md px-4 py-2 mt-6"
      >
        <p class="font-semibold text-xl">К выводу</p>

        <div class="flex justify-between items-start text-sm">
          <p>Доступно: <span class="font-semibold">12 345 ₽</span></p>
          <p class="text-gray-500">
            Скоро: <span class="font-semibold">23 456 ₽</span>
          </p>
        </div>

        <div class="w-full flex gap-2">
          <Button
            text="История"
            isWhite
            class="w-full !h-10"
            @click="() => router.push('/payment-history')"
          />
          <Button
            text="Вывести"
            isWhite
            class="w-full !h-10"
            @click="() => router.push('/payment-order')"
          />
        </div>
      </div>

      <div
        class="w-full h-auto bg-black/90 text-white rounded-md px-4 py-2 mt-6"
      >
        <p class="font-semibold text-xl max-[360px]:text-lg">
          Мои банковские реквизиты
        </p>

        <div class="grid grid-cols-2 gap-2 mb-5 mt-2">
          <PaymentCard />
          <PaymentCard />
        </div>

        <Button
          text="Добавить"
          isWhite
          class="w-full !h-10"
          @click="addPersonal"
        />
      </div>
    </div>
    <MyData class="mt-12" />
  </div>
</template>
