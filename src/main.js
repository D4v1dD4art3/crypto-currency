import Vue from "vue";
import App from "./App.vue";
// cuando incluimos @ apuntamos directamente al directorio src, no importa si modificamos la ubicacopn de src
import "@/assets/css/tailwind.css";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

// recordar importar el rauter dentro de la app y luego llamarlo en la instancia de vue
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filter";
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
