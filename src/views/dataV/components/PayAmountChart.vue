<template>
    <div class="payAmountChart-container" ref="payAmountChart" style="height: 46px"></div>
</template>

<script>
    import mixins from './mixins'
    export default {
        name: "PayAmountChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.payAmountChart)
            },
            loadChart () {
                const option = {
                    color: ['#3398db'],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        show: false,
                        data: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04','2020-01-05', '2020-01-06', '2020-01-07', '2020-01-08', '2020-01-09', '2020-01-10', '2020-01-11', '2020-01-12', '2020-01-13']
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
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
                        data: [1, 3, 4, 2, 8, 5, 7, 10, 6, 12, 4, 8, 7],
                        type: 'bar',
                        barWidth: '60%'
                    }]
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>