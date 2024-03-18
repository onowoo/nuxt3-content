import { acceptHMRUpdate, defineStore } from "pinia";

export const useTagType = defineStore("tagTypes", () => {
  const type = [
    "primary","success","info","warning","danger"
  ]
  return {
    type
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTagType, import.meta.hot));
