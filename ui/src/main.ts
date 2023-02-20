import "the-new-css-reset/css/reset.css";
import App from "./App.vue";
import axios from "axios";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { getBaseUrl } from "@/helpers/config";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

axios.defaults.baseURL = getBaseUrl();
axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["Access-Control-Allow-Credentials"] = true;
  }
  return config;
});

app.config.globalProperties.$axios = axios;

app.use(pinia);
app.use(router);

app.mount("#app");
