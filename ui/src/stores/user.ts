import type { Ref } from "vue";
import { defineStore } from "pinia";
import { isDebug } from "@/helpers/config";
import { ref } from "vue";

type NullableString = Ref<string | null>;

export const useUserStore = defineStore("user", {
  persist: isDebug(),
  state: () => ({
    uuid: ref(null) as NullableString,
  }),
});
