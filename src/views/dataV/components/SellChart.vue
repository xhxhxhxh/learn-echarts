<template>
    <div class="SellChart-container" ref="SellChart" style="height: 306px"></div>
</template>

<script>
    import mixins from './mixins'
    export default {
        name: "SellChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.SellChart)
            },
            loadChart () {
                const option = {
                    color: ['#3398db'],
                    xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    },
                    grid: {
                        left: '7%',
                        right: '10%',
                        bottom: '12%',
                        top: '10%',
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        textStyle: {
                            color: 'rgba(0,0,0,.85)'
                        },
                        extraCssText: 'box-shadow: rgb(174, 174, 174) 0px 0px 10px;border-radius: 3px;'
                    },
                    series: [{
                        data: [100, 300, 400, 200, 800, 500, 700, 100, 600, 1200, 400, 800,],
                        type: 'bar',
                    }]
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>