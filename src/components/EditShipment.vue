<template>
    <shipment-form @submit-shipment="updateShipment"/>
</template>
  
<script>
import ShipmentForm from '@/components/partials/ShipmentForm.vue'

export default {
    components: {
        'shipment-form': ShipmentForm
    },
    async mounted() {
        await this.$store.dispatch('getShipment', this.$route.params.id)
        this.$store.dispatch('setShipmentStatus')
    },
    methods: {
        async updateShipment() {
            this.$store.dispatch('clearErrors')

            try {
                const response = await this.axios.put(
                    `${this.axios.defaults.baseURL}${this.$store.getters.getShipment.id}/`,
                    this.$store.getters.getShipment
                );
                this.$store.dispatch('updateShipment', response?.data)
                this.$router.push({name: 'main'})
            } catch(error) {
                this.$store.commit('setErrors', error?.response?.data)
            }    
        },
    }
}
</script>