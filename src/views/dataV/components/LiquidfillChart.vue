<template>
    <div class="liquidfillChart-container" ref="liquidfillChart" style="height: 100%"></div>
</template>

<script>
    import mixins from './mixins'
    import 'echarts-liquidfill'
    export default {
        name: "LiquidfillChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.liquidfillChart)
            },
            loadChart () {
                const option = {
                    grid: {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        textStyle: {
                            color: 'rgba(0,0,0,.85)'
                        },
                        extraCssText: 'box-shadow: rgb(174, 174, 174) 0px 0px 10px;border-radius: 3px;',
                        formatter: params => {
                            return params.marker + Math.floor(params.value * 100) + '%'
                        }
                    },
                    series: [{
                        type: 'liquidFill',
                        data: [0.6],
                        color: ['rgb(47, 194, 91)'],
                        radius: '80%',
                        outline: {
                            show: true,
                            borderDistance: 0,
                            itemStyle: {
                                color: 'none',
                                borderColor: '#aaa4a4',
                                borderWidth: 1,
                                shadowBlur: 0,
                                shadowColor: '#fff'
                            }
                        },
                        backgroundStyle: {
                            color: '#fff'
                        },

                        itemStyle: {
                            opacity: 0.7,
                            shadowBlur: 0,
                            shadowColor: '#fff'
                        },
                        label: {
                            color: '#999',
                            insideColor: '#fff',
                            fontSize: 36,
                            fontWeight: 'normal',
                        },

                    }]
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>