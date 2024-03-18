import { acceptHMRUpdate, defineStore } from "pinia";

export const useMenu = defineStore("menuStatus", () => {
  const status = ref(false)
  const activeStyle = "text-[#00dc82]";
  const menu = [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "前端",
      path: "/frontend",
    },
    {
      name: "后端",
      path: "/backend",
    },
    {
      name: "导航",
      path: "/link",
    },
  ];
  return {
    status,
    menu,
    activeStyle
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMenu, import.meta.hot));
