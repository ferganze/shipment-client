<template>
    <nav class="navbar">
        <router-link :to="{name: 'main'}">Shipments</router-link>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
@import './assets/styles.css';
</style>
