<template>
    <ul class="errors" v-show="Object.keys(errors).length > 0">
        <li v-for="(error, key, index) in errors" :key="index">
            <strong>{{ key }}:</strong> {{ error[0] }}
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        errors () {
            return this.$store.getters.getErrors
        }
    }
}
</script>