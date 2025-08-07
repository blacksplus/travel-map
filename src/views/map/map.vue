<template>
    <div id="map">

    </div>
</template>

<script lang="ts" setup>
    import TMap from './js/map.js'
    import { onMounted } from 'vue'
    onMounted(() => {
        window.map = new TMap('map')
    });

</script>

<style lang="scss" scoped>
    #map {
        height: 100%;
        width: 100%;
    }
</style>