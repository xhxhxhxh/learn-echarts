<template>
    <div class="accessAmountChart-container">
        <div class="accessAmountChart" ref="accessAmountChart" style="height: 46px"></div>
    </div>
</template>

<script>
    import mixins from './mixins'
    export default {
        name: "AccessAmountChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.accessAmountChart)
            },
            loadChart () {
                const option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        show: false
                    },
                    grid: {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: '5px',
                    },
                    yAxis: {
                        show: false,
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        textStyle: {
                            color: 'rgba(0,0,0,.85)'
                        },
                        extraCssText: 'box-shadow: rgb(174, 174, 174) 0px 0px 10px;border-radius: 3px;'
                    },
                    series: [{
                        data: [620, 432, 220, 534, 790, 432, 220, 534, 790, 432, 220],
                        type: 'line',
                        areaStyle: {
                            color: 'purple'
                        },
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        itemStyle: {
                            opacity: 0
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 1,
                                borderColor: '#fff',
                                color: 'purple',
                                borderWidth: 3
                            },
                        }
                    }]
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>