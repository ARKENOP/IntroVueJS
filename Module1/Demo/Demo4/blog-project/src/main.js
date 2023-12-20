import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import FormulaireComponent from './pages/FormulaireComponent.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/formulaire', component: FormulaireComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

createApp(App).mount('#app')
