<template>
    <div class="SellPieChart-container" ref="SellPieChart" style="height: 100%"></div>
</template>

<script>
    import mixins from './mixins'
    export default {
        name: "SellPieChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.SellPieChart)
            },
            loadChart () {
                const option = {
                    title: [
                        {
                            text: '销售额',
                            textStyle: {
                                color: 'rgba(0,0,0,.85)',
                                fontWeight: 500,
                                fontSize: 14
                            }
                        },
                        {
                            text: '销售额',
                            subtext: '￥ 15780',
                            textStyle: {
                                color: 'rgba(0,0,0,.45)',
                                fontWeight: 500,
                                fontSize: 14
                            },
                            subtextStyle: {
                                color: 'rgba(0,0,0,.85)',
                                fontWeight: 500,
                                fontSize: 25
                            },
                            left: '29%',
                            top: '43%',
                            textAlign: 'center'
                        }
                    ],
                    grid: {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    },
                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        left: '70%',
                        height: 250,
                        top: 'middle',
                        icon: 'circle',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : ￥{c}',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        textStyle: {
                            color: 'rgba(0,0,0,.85)'
                        },
                        extraCssText: 'box-shadow: rgb(174, 174, 174) 0px 0px 10px;border-radius: 3px;'
                    },
                    series: [ {
                        name: '销售额',
                        type: 'pie',
                        radius: ['45%', '60%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                        },
                        itemStyle: {
                            borderWidth: 4,
                            borderColor: '#fff'
                        },
                        data: [
                            {sale: '28%', name: '家用电器 | 28%', value: 4800, itemStyle: {color: 'rgb(24, 144, 255)'}},
                            {sale: '21%', name: '食用酒水 | 21%', value: 3520, itemStyle: {color: 'rgb(19, 194, 194)'}},
                            {sale: '18%', name: '个护健康 | 18%', value: 3200, itemStyle: {color: 'rgb(47, 194, 91)'}},
                            {sale: '14%', name: '服饰箱包 | 14%', value: 2580, itemStyle: {color: 'rgb(250, 204, 20)'}},
                            {sale: '7%', name: '母婴产品 | 7%', value: 1760, itemStyle: {color: 'rgb(240, 72, 100)'}},
                            {sale: '7%', name: '其他 | 7%', value: 1500, itemStyle: {color: 'rgb(133, 67, 224)'}}
                        ]
                    }]
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>