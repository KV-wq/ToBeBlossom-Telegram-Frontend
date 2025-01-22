import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    stage: 1,
  }),
  getters: {
    currentStage: (state) => state.stage,
  },
  actions: {
    incrementStage() {
      this.stage++;
    },
    decrementStage() {
      if (this.stage > 1) {
        this.stage--;
      }
    },
    setStage(stage) {
      this.stage = stage;
    },
  },
});
