<template>
    <div class="shipment-form">
        <errors/>
        <form @submit.prevent="$emit('submitShipment')">
            <div class="form-group">
                <label for="tracking_id">Tracking ID</label>
                <input type="text" class="form-control" id="tracking_id" v-model="shipment.tracking_id">
            </div>
            <div class="form-group">
                <label for="recipient">Recipient</label>
                <input type="text" class="form-control" id="recipient" v-model="shipment.recipient">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" v-model="shipment.address">
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <select class="form-control" id="status" v-model="shipment.status">
                    <option :value="key" v-for="status, key in statuses" :key="key">{{ status }}</option>
                </select>
            </div>
            <div class="form-actions">
                <router-link :to="{name: 'main'}" class="btn btn-info">Cancel</router-link>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import ErrorsList from '@/components/partials/ErrorsList.vue'

export default {
    components: {
        'errors': ErrorsList
    },
    computed: {
        shipment () {
            return this.$store.getters.getShipment
        },
        statuses () {
            return this.$store.getters.getStatuses
        }
    }
}
</script>