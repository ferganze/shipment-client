import { createRouter, createWebHistory } from 'vue-router'
import ShipmentsList from '@/components/ShipmentsList.vue'
import AddShipment from '@/components/AddShipment.vue'
import ViewShipment from '@/components/ViewShipment.vue'
import EditShipment from '@/components/EditShipment.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: ShipmentsList
    },
    {
        path: '/add-new',
        name: 'add-new',
        component: AddShipment
    },
    {
        path: '/view/:id',
        name: 'view',
        component: ViewShipment
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditShipment
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router