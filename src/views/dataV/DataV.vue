<template>
    <div class="dataV-container">
        <top-view />
        <mid-view />
    </div>
</template>

<script>
    import TopView from './components/TopView'
    import MidView from './components/MidView'
    export default {
        name: "DataV",
        components: {
            TopView,
            MidView
        }
    }
</script>

<style scoped lang="less">
.dataV-container {
    min-height: 100%;
    background-color: #f0f2f5;
    padding: 24px;
    min-width: 320px;
}
</style>