import Vue from "vue";
// se importa la dependencia que instalamos
import Router from "vue-router";
// se importa un componente llamado home que aun no existe y este vive en un directorio llamado views que son simplemenete las paginas que se van a compartir dentro del proyecto
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      // con * estamos agregando una ruta defult que quiere decir que cualquier ruta puede entrar alli
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
