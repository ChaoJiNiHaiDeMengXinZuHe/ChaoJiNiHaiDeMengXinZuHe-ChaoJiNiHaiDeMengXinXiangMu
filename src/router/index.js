import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllView from "../views/AllView.vue";
import HotDot from "../views/HotDot.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        children: [
            {
                path: "all",
                name: "all",
                component: AllView
            }
        ]
    },
    {
        path: "/hot_dot",
        name: "hot_dot",
        component: HotDot
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router