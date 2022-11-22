<template>
    <div class="card">
        <div class="card-header">Shipments</div>
        <div class="card-actions">
            <router-link :to="{name: 'add-new'}" class="btn btn-large">Add New Shipment</router-link>
        </div>
        <div class="shipments-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>Tracking ID</th>
                        <th>Recipient</th>
                        <th>Status</th>
                        <th>Last Updated</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="shipment in shipments" :key="shipment.id">
                        <td><strong>{{ shipment.tracking_id }}</strong></td>
                        <td>{{ shipment.recipient }}</td>
                        <td><span class="status">{{ shipment.status }}</span></td>
                        <td>{{ dateFormatter( shipment.updated ) }}</td>
                        <td>
                            <router-link :to="{name: 'view', params: {id: shipment.id}}" class="btn btn-info">View</router-link>
                            <router-link :to="{name: 'edit', params: {id: shipment.id}}" class="btn">Edit</router-link>
                            <button @click="deleteShipment(shipment)" class="btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <pagination/>
    </div>
</template>
  
<script>
import mixins from '@/mixins'
import PaginationLinks from '@/components/partials/PaginationLinks.vue'

export default {
    components: {
        'pagination': PaginationLinks
    },
    mixins: [mixins],
    mounted () {
        this.$store.dispatch('getShipments')
    },
    computed: {
        shipments () {
            return this.$store.getters.getShipments
        }
    },
    methods: {
        async deleteShipment(shipment) {
            let confirmation = confirm('Do you want to delete this Shipment?')

            if (confirmation) {
                try {
                    await this.axios.delete(`${this.axios.defaults.baseURL}${shipment.id}/`)
                    this.$store.dispatch('deleteShipment', shipment.id)
                } catch(error) {
                    console.log(error)
                }
            }      
        }
    }
}
</script>