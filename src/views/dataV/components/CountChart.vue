<template>
    <div class="countChart-container">
        <div class="countChart" ref="countChart" style="height: 46px"></div>
    </div>
</template>

<script>
    import mixins from './mixins'
    export default {
        name: "countChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.countChart)
            },
            loadChart () {
                const option = {
                    xAxis: {
                        data: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04','2020-01-05', '2020-01-06', '2020-01-07', '2020-01-08', '2020-01-09', '2020-01-10', '2020-01-11'],
                        type: 'category',
                        boundaryGap: false,
                        show: false
                    },
                    grid: {
                        left: '4px',
                        right: '4px',
                        bottom: 0,
                        top: '5px',
                    },
                    yAxis: {
                        show: false,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none'
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        textStyle: {
                            color: 'rgba(0,0,0,.85)'
                        },
                        extraCssText: 'box-shadow: rgb(174, 174, 174) 0px 0px 10px;border-radius: 3px;'
                    },
                    series: {
                        data: [620, 432, 220, 534, 790, 432, 220, 534, 790, 432, 220],
                        type: 'line',
                        areaStyle: {
                            color: '#3398db',
                            opacity: 0.4
                        },
                        smooth: true,
                        lineStyle: {
                            color: '#3398db'
                        },
                        showSymbol: false,
                        itemStyle: {
                            color: '#3398db',
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 1,
                                borderColor: '#fff',
                                color: '#3398db',
                                borderWidth: 3
                            },
                        }
                    }
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>