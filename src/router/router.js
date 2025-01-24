import { createRouter, createMemoryHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Init from "../pages/Init.vue";
import Profile from "../pages/Profile.vue";
import AddPersonal from "../pages/AddPersonal.vue";
import PaymentOrder from "../pages/PaymentOrder.vue";
import PaymentHistory from "../pages/PaymentHistory.vue";
import PaymentSuccess from "../pages/PaymentSuccess.vue";
import Home from "../pages/Home.vue";
import Statistics from "../pages/Statistics.vue";
import Promocodes from "../pages/Promocodes.vue";
import AddPromocode from "../pages/AddPromocode.vue";

const routes = [
  {
    path: "/",
    name: "Initialization",
    component: Init,
  },
  {
    path: "/auth",
    name: "Authorization",
    component: Auth,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/add-personal",
    name: "Add Personal",
    component: AddPersonal,
  },
  {
    path: "/payment-history",
    name: "Payment History",
    component: PaymentHistory,
  },
  {
    path: "/payment-order",
    name: "Payment Order",
    component: PaymentOrder,
  },
  {
    path: "/payment-success",
    name: "Payment Success",
    component: PaymentSuccess,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/promocodes",
    name: "Promocodes",
    component: Promocodes,
  },
  {
    path: "/add-promocode",
    name: "Add Promocode",
    component: AddPromocode,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
