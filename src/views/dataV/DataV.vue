<template>
    <div class="dataV-container">
        <top-view />
        <mid-view />
        <bottom-view />
        <map-view />
    </div>
</template>

<script>
    import TopView from './components/TopView'
    import MidView from './components/MidView'
    import BottomView from './components/BottomView'
    import MapView from './components/MapView'
    export default {
        name: "DataV",
        components: {
            TopView,
            MidView,
            BottomView,
            MapView
        }
    }
</script>

<style scoped lang="less">
.dataV-container {
    min-height: 100%;
    background-color: #f0f2f5;
    padding: 24px 24px 0 24px;
    min-width: 320px;
}
</style>