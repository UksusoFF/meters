<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/user";
import { useMetersStore } from "@/stores/meters";

export default defineComponent({
  setup() {
    const user = useUserStore();
    const meters = useMetersStore();

    return { user, meters };
  },
  mounted() {
    //
  },
});
</script>

<template>
  <div>HomeView</div>
</template>
