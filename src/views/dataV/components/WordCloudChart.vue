<template>
    <div class="WordCloudChart-container" ref="WordCloudChart" style="height: 100%"></div>
</template>

<script>
    import mixins from './mixins'
    import 'echarts-wordcloud'

    const data = []
    for (let i = 0; i < 10; i++) {
        data.push({
            name: 'Hello',
            value: Math.random() * 100
        })
    }

    export default {
        name: "WordCloudChart",
        mixins: [mixins],
        data () {
            return {

            }
        },
        methods: {
            initEcharts () {
                this.chart = this.$echarts.init(this.$refs.WordCloudChart)
            },
            loadChart () {
                const option = {
                    grid: {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    },
                    series: [{
                        type: 'wordCloud',
                        shape: 'circle',
                        drawOutOfBound: false,
                        textStyle: {
                            normal: {
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                // Color can be a callback function or a color string
                                color: function () {
                                    // Random color
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 4,
                                shadowColor: '#333'
                            }
                        },
                        data
                    }],
                };

                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>