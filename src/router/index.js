import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/services",
        name: "Services",
        component: Services
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: portfolio
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
