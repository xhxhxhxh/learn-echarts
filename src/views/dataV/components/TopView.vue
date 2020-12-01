<template>
    <div class="topView-container">
        <a-row :gutter="24">
            <a-col :xs="24" :sm="12" :xl="6">
                <my-card title="总销售额" tip="指标说明">
                    <div class="value">¥ 126,560</div>
                    <div class="content">
                        <div class="sell">
                            <span style="margin-right: 16px">周同比 12%
                                <span class="icon">
                                    <a-icon type="caret-up" style="color: rgb(245, 34, 45)"/>
                                </span>
                            </span>
                            <span>日同比 11%
                                <span class="icon down">
                                    <a-icon type="caret-down" style="color: rgb(82, 196, 26)"/>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="footer">日销售额￥ 12,423</div>
                </my-card>
            </a-col>
            <a-col :xs="24" :sm="12" :xl="6">
                <my-card title="访问量" tip="指标说明">
                    <div class="value">8,846</div>
                    <div class="content">
                        <access-amount-chart/>
                    </div>
                    <div class="footer">日访问量 1,234</div>
                </my-card>
            </a-col>
            <a-col :xs="24" :sm="12" :xl="6">
                <my-card title="支付笔数" tip="指标说明">
                    <div class="value">6,850</div>
                    <div class="content">
                        <pay-amount-chart/>
                    </div>
                    <div class="footer">转化率 60%</div>
                </my-card>
            </a-col>
            <a-col :xs="24" :sm="12" :xl="6">
                <my-card title="运营活动效果" tip="指标说明">
                    <div class="value">78%</div>
                    <div class="content">
                        <operational-activities-chart/>
                    </div>
                    <div class="footer">
                        <div class="sell" style="padding-top: 0">
                            <span style="margin-right: 16px">周同比 12%
                                <span class="icon">
                                    <a-icon type="caret-up" style="color: rgb(245, 34, 45)"/>
                                </span>
                            </span>
                            <span>日同比 11%
                                <span class="icon down">
                                    <a-icon type="caret-down" style="color: rgb(82, 196, 26)"/>
                                </span>
                            </span>
                        </div>
                    </div>
                </my-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import MyCard from './MyCard'
    import AccessAmountChart from './AccessAmountChart'
    import PayAmountChart from './PayAmountChart'
    import OperationalActivitiesChart from './OperationalActivitiesChart'

    export default {
        name: "TopView",
        data() {
            return {}
        },
        components: {
            MyCard,
            AccessAmountChart,
            PayAmountChart,
            OperationalActivitiesChart
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .topView-container {
        .content {
            color: rgba(0, 0, 0, .85);
            height: 46px;
        }
        .sell {
            height: 100%;
            padding-top: 24px;
            .icon {
                position: relative;
                top: 1px;
                margin-left: 4px;

                i {
                    font-size: 12px;
                    vertical-align: -.125em;
                    transform: scale(.83);
                }

                &.down {
                    i {
                        vertical-align: 0;
                    }
                }
            }
        }
    }
</style>