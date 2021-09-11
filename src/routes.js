import Index from "views/Index.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "fas fa-mug-hot text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Swap",
    icon: "fas fa-exchange-alt text-primary",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "",
    name: "Farms",
    icon: "fas fa-tractor text-primary",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "",
    name: "Pools",
    icon: " text-primary", //TODO icone Pools
    component: Tables,
    layout: "",
  },
];
export default routes;
