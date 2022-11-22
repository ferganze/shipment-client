<template>
    <div v-show="pagination.previous || pagination.next" class="pagination">
        <button v-show="pagination.previous" @click="paginatetShipments(pagination.previous)">Prev</button>
        <button v-show="pagination.next" @click="paginatetShipments(pagination.next)">Next</button>
    </div>
</template>

<script>
export default {
    computed: {
        pagination () {
            return this.$store.getters.getPagination
        }
    },
    methods: {
        paginatetShipments(url) {
            this.$store.dispatch('getShipments', url)
        }
    }
}
</script>