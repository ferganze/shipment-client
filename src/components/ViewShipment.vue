<template>
    <div class="view-shipment">
        <div>
            <strong>Tracking ID:</strong> {{ shipment.tracking_id }}
        </div>
        <div>
            <strong>Recipient:</strong> {{ shipment.recipient }}
        </div>
        <div>
            <strong>Address:</strong> {{ shipment.address }}
        </div>
        <div>
            <strong>Status:</strong> {{ shipment.status }}
        </div>
        <div>
            <strong>Created:</strong> {{ dateFormatter(shipment.created, 'MMMM D, YYYY - HH:mm') }}
        </div>
        <div>
            <strong>Updated:</strong> {{ dateFormatter(shipment.updated, 'MMMM D, YYYY - HH:mm') }}
        </div>

        <br>
        <router-link :to="{name: 'main'}" class="btn">Go Back</router-link>
    </div>
</template>
  
<script>
import mixins from '@/mixins'

export default {
    mixins: [mixins],
    mounted() {
        this.$store.dispatch('getShipment', this.$route.params.id)
    },
    computed: {
        shipment () {
            return this.$store.getters.getShipment
        }
    }
}
</script>