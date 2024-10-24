import { Axios } from "axios";
import { z } from "zod";

export {};

declare global {
  var axios: Axios;
  var main_url: string;
  var zod: typeof z;
}
