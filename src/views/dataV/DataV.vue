<template>
    <div class="dataV-container">
        <top-view />
        <mid-view />
        <bottom-view />
    </div>
</template>

<script>
    import TopView from './components/TopView'
    import MidView from './components/MidView'
    import BottomView from './components/BottomView'
    export default {
        name: "DataV",
        components: {
            TopView,
            MidView,
            BottomView
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