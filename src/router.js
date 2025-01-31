import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
    { path: '/', component: () => import("./Pages/HomePage.vue") },
    { path: '/login', component: () => import("./Pages/LoginPage.vue") },
    { path: '/register', component: () => import("./Pages/RegisterPage.vue") }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;