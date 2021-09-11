import Index from "views/Index.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Swap",
    icon: "", //TODO icone swap
    component: Icons,
    layout: "/admin",
  },
  {
    path: "",
    name: "Farms",
    icon: "", //TODO icone Farms
    component: Tables,
    layout: "/admin",
  },
  {
    path: "",
    name: "Pools",
    icon: "", //TODO icone Pools
    component: Tables,
    layout: "",
  },
];
export default routes;
