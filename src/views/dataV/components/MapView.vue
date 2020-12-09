<template>
    <div class="mapView-container">
        <a-row :gutter="24" >
            <a-col :xs="24" :sm="24" :xl="18" style="margin-bottom: 24px">
                <map-chart />
            </a-col>
            <a-col :xs="24" :sm="24" :xl="6">
                <a-row :gutter="24">
                    <a-col :xs="24" :sm="12" :xl="24" style="margin-bottom: 24px">
                        <a-card :loading="loading" title="用户月同比增长" :bordered="bordered">
                            <div class="chart-box">
                                <liquidfill-chart />
                            </div>
                        </a-card>
                    </a-col>
                    <a-col :xs="24" :sm="12" :xl="24" style="margin-bottom: 24px">
                        <a-card :loading="loading" title="热门搜索" :bordered="bordered">
                            <div class="chart-box">
                                <word-cloud-chart />
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row :gutter="24" >
            <a-col :xs="24" :sm="24" style="margin-bottom: 24px">
                <order-chart />
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import MapChart from "./MapChart"
    import LiquidfillChart from './LiquidfillChart'
    import WordCloudChart from './WordCloudChart'
    import OrderChart from './OrderMap'

    export default {
        name: "MapView",
        components: {
            MapChart,
            LiquidfillChart,
            WordCloudChart,
            OrderChart
        },
        data () {
            return {
                loading: false,
                bordered: false,
            }
        }
    }
</script>

<style scoped lang="less">
.mapView-container {
    .chart-box {
        height: 185px;
    }
}
</style>