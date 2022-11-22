<template>
    <shipment-form @submit-shipment="addShipment"/>
</template>
  
<script>
import ShipmentForm from '@/components/partials/ShipmentForm.vue'

export default {
    components: {
        'shipment-form': ShipmentForm
    },
    mounted() {
        this.$store.commit('setShipment', {status: 0})
    },
    methods: {
        async addShipment() {
            this.$store.dispatch('clearErrors')

            try {
                const response = await this.axios.post('', this.$store.getters.getShipment)
                this.$store.dispatch('addShipment', response?.data)
                this.$router.push({name: 'main'})
            } catch(error) {
                this.$store.commit('setErrors', error?.response?.data)
            }    
        }
    }
}
</script>