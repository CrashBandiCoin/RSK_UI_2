import Index from "views/Index.js";
import Swap from "views/features/Swap";
import Farms from "views/features/Farms";
import Pools from "views/features/Pools";

var routes = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: "fas fa-mug-hot text-primary",
    component: Index,
    layout: "/",
  },
  {
    path: "swap",
    name: "Swap",
    icon: "fas fa-exchange-alt text-primary",
    component: Swap,
    layout: "/",
  },
  {
    path: "farms",
    name: "Farms",
    icon: "fas fa-tractor text-primary",
    component: Farms,
    layout: "/",
  },
  {
    path: "pools",
    name: "Pools",
    icon: " text-primary", //TODO icone Pools
    component: Pools,
    layout: "/",
  },
];
export default routes;
