<template>
    <div class="home-container">
        <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :lg="8">
                <div class="line" ref="line" id="line"></div>
            </a-col>
            <a-col :xs="24" :sm="12" :lg="8">
            </a-col>
            <a-col :xs="24" :sm="12" :lg="8">
                col-8
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import { Line } from '@antv/g2plot';
    export default {
        name: "AntV",
        data () {
            return {
                dataList: [
                    { year: '1991', value: 3 },
                    { year: '1992', value: 4 },
                    { year: '1993', value: 3.5 },
                    { year: '1994', value: 5 },
                    { year: '1995', value: 4.9 },
                    { year: '1996', value: 6 },
                    { year: '1997', value: 7 },
                    { year: '1998', value: 9 },
                    { year: '1999', value: 13 }
                ]
            }
        },
        components: {

        },
        created () {

        },
        mounted () {
            this.initAntV()
        },
        methods: {
            // AntV初始化
            initAntV() {
                const linePlot = new Line('line', {
                    data: this.dataList,
                    xField: 'year',
                    yField: 'value',
                    color: '#FE740C',
                    point: {
                        size: 5,
                        style: {
                            fill: '#fff',
                            fillOpacity: 0.6,
                            stroke: '#FE740C',
                            lineWidth: 2
                        }
                    },
                    yAxis: {
                        // 格式化 y 轴标签加单位，自定义 labal 样式
                        label: {
                            formatter: (v) => {
                                return v + 'k';
                            }
                        },
                    },
                    label: {
                        formatter: (v) => {
                            console.log(v);
                            return v.value + 'k';
                        },
                    },


                });

                linePlot.render();
            },


        }
    }
</script>

<style lang="less" scoped>
.line {
    height: 400px;
}
</style>
