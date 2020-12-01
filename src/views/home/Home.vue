<template>
    <div class="home-container">
        <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :lg="8">
                <div class="bar" ref="bar"></div>
            </a-col>
            <a-col :xs="24" :sm="12" :lg="8">
                <div class="pie" ref="pie"></div>
            </a-col>
            <a-col :xs="24" :sm="12" :lg="8">
                <div class="series" ref="series"></div>
            </a-col>
        </a-row>
        <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :lg="8">
                <div class="useDataset" ref="useDataset"></div>
            </a-col>
            <a-col :xs="24" :sm="12" :lg="8">
                <div class="axis" ref="axis"></div>
            </a-col>
            <a-col :xs="24" :sm="12" :lg="8">

            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                barChart: null,
                pieChart: null,
                seriesChart: null,
                seriesChartUseDataset: null,
                axisChart: null
            }
        },
        components: {

        },
        created () {

        },
        mounted () {
            this.initEcharts()
            this.loadBar()
            this.loadPie()
            this.loadSeriesChart()
            this.loadSeriesChartUseDataset()
            this.loadAxisChart()
        },
        methods: {
            // echarts初始化
            initEcharts() {
                this.barChart = this.$echarts.init(this.$refs.bar);
                this.pieChart = this.$echarts.init(this.$refs.pie);
                this.seriesChart = this.$echarts.init(this.$refs.series);
                this.seriesChartUseDataset = this.$echarts.init(this.$refs.useDataset);
                this.axisChart = this.$echarts.init(this.$refs.axis);
            },

            // 载入圆柱图
            loadBar() {
                this.barChart.setOption({
                    title: {
                        text: '柱状图'
                    },
                    legend: {
                        data:['销量']
                    },
                    tooltip: {
                        backgroundColor: '#fff'
                    },
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },

            // 载入饼状图
            loadPie() {
                this.pieChart.setOption({
                    title: {
                        text: '饼状图'
                    },
                    backgroundColor: '#2c343c',
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    },
                    visualMap: {
                        // 不显示 visualMap 组件，只用于明暗度的映射
                        show: false,
                        // 映射的最小值为 80
                        min: 80,
                        // 映射的最大值为 600
                        max: 600,
                        inRange: {
                            // 明暗度的范围是 0 到 1
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '75%',
                            roseType: 'angle',
                            center: ['50%', '50%'],
                            itemStyle: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            emphasis: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            data:[
                                {value:235, name:'视频广告'},
                                {value:274, name:'联盟广告'},
                                {value:310, name:'邮件营销'},
                                {value:335, name:'直接访问'},
                                {value:400, name:'搜索引擎'}
                            ]
                        }
                    ]
                })
            },

            // 载入多系列图
            loadSeriesChart() {
                this.seriesChart.setOption({
                    title: {
                        text: '多系列坐标图'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['一季度', '二季度', '三季度', '四季度']
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'bar',
                            data: [80, 100, 77, 66]
                        },
                        {
                            type: 'line',
                            data: [150, 120, 160, 88]
                        },
                        {
                            type: 'pie',
                            radius: '30%',
                            center:['70%', '20%'],
                            data: [
                                {value:100, name:'分类一'},
                                {value:200, name:'分类二'},
                                {value:250, name:'分类三'},
                                {value:150, name:'分类四'},
                            ]
                        }
                    ]
                });
            },

            // 载入多系列图
            loadSeriesChartUseDataset() {
                this.seriesChartUseDataset.setOption({
                    title: {
                        text: '多系列坐标图',
                        subtext: '副标题'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['一季度', '二季度', '三季度', '四季度']
                    },
                    dataset: {
                        source: [
                            ['一季度', 80, 150, '分类一', 100],
                            ['二季度', 100, 120, '分类二', 200],
                            ['三季度', 77, 160, '分类三', 250],
                            ['四季度', 66, 88],
                        ]
                    },
                    legend: {
                        data: ['柱状图', '折线图', '饼图']
                    },
                    yAxis: {},
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: false
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [
                        {
                            show: true,
                            start: 0,
                            end: 100
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            name: '柱状图',
                            encode: {x: 0, y: 1}
                        },
                        {
                            type: 'line',
                            name: '折线图',
                            encode: {x: 0, y: 2}
                        },
                        {
                            type: 'pie',
                            radius: '30%',
                            name: '饼图',
                            center:['70%', '20%'],
                            encode: {itemName: 3, value: 4}
                        }
                    ]
                });
            },

            // 载入多极图
            loadAxisChart() {
                this.axisChart.setOption({
                    title: {
                        text: '多极坐标图',
                        subtext: '副标题'
                    },
                    tooltip: {},
                    xAxis: {type: 'category'},
                    dataset: {
                        source: [
                            ['product', '2012', '2013', '2014', '2015'],
                            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
                        ]
                    },

                    yAxis: [
                        {min: 0, max: 90}, {splitLine: {show: false}}
                    ],
                    series: [
                        {
                            type: 'bar',
                            name: '柱状图',
                            seriesLayoutBy: 'row',
                        },
                        {
                            type: 'line',
                            name: '折线图',
                            seriesLayoutBy: 'row',
                            yAxisIndex: 1
                        },
                    ]
                });
            },
        }
    }
</script>

<style lang="less" scoped>
.bar, .pie, .series, .useDataset, .axis {
    height: 300px;
}
</style>
