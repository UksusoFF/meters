import { AxiosStatic } from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    //
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosStatic;
  }
}
