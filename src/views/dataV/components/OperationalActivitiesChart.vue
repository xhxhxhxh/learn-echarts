<template>
    <div class="operationalActivitiesChart-container" ref="operationalActivitiesChart" style="height: 46px"></div>
</template>

<script>
    import mixins from './mixins'
    export default {
        name: "OperationalActivitiesChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.operationalActivitiesChart)
            },
            loadChart () {
                const option = {
                    xAxis: {
                        type: 'value',
                        boundaryGap: false,
                        show: false,
                    },
                    grid: {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    },
                    yAxis: {
                        type: 'category',
                        show: false,
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        textStyle: {
                            color: 'rgba(0,0,0,.85)'
                        },
                        extraCssText: 'box-shadow: rgb(174, 174, 174) 0px 0px 10px;border-radius: 3px;'
                    },
                    series: [
                        {
                            data: [200],
                            stack: '总量',
                            type: 'bar',
                            barWidth: 10,
                            itemStyle: {
                                color: '#45c946'
                            }
                        },
                        {
                            data: [250],
                            stack: '总量',
                            type: 'bar',
                            itemStyle: {
                                color: '#eee'
                            }
                        },
                        {
                            data: [200],
                            stack: '总量',
                            type: 'custom',
                            itemStyle: {
                                color: '#45c946'
                            },
                            renderItem: (params, api) => {
                                const value = api.value(0)
                                const endPoint = api.coord([value, 0])
                                return {
                                    type: 'group',
                                    position: endPoint,
                                    children: [
                                        {
                                            type: 'path',
                                            shape: {
                                                d: 'M273.6 593l212.9-212.9c14.1-14.1 36.9-14.1 50.9 0l213 212.9c22.7 22.7 6.6 61.5-25.5 61.5H299.1c-32.1 0-48.1-38.8-25.5-61.5z',
                                                x: -5,
                                                y: 10,
                                                width: 10,
                                                height: 10,
                                                layout: 'cover'
                                            },
                                            style: {
                                                fill: '#45c946'
                                            }
                                        },
                                        {
                                            type: 'path',
                                            shape: {
                                                d: 'M273.6 431l212.9 212.9c14.1 14.1 36.9 14.1 50.9 0l213-212.9c22.7-22.7 6.6-61.5-25.5-61.5H299.1c-32.1 0-48.1 38.8-25.5 61.5z',
                                                x: -5,
                                                y: -20,
                                                width: 10,
                                                height: 10,
                                                layout: 'cover'
                                            },
                                            style: {
                                                fill: '#45c946'
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                    ]
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>