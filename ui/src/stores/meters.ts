import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Meter } from "@/types/meter";
import { defineStore } from "pinia";
import { isDebug } from "@/helpers/config";

export const useMetersStore = defineStore("regions", {
  persist: isDebug(),
  state: () => ({
    meters: [] as Meter[],
  }),
  getters: {
    getById: (state) => {
      return (id: string): Meter | null => {
        return state.meters.find((m) => m.id === id) ?? null;
      };
    },
    get(state) {
      return state.meters;
    },
  },
  actions: {
    async fetch() {
      if (this.meters.length) {
        return;
      }

      try {
        const data: AxiosResponse<{
          meters: Meter[];
        }> = await axios.get("/api/data/meters");
        this.meters = data.data.meters;
      } catch (error) {
        // TODO: Add error handling.
        console.log(error);
      }
    },
  },
});
