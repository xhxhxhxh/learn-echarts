<template>
    <div class="midView-container">
        <div class="midView">
            <a-tabs default-active-key="1" @change="changeTab" size="large" :animated="animated">
                <a-tab-pane key="1" tab="销售额">
                    <a-row :gutter="24" class="content">
                        <a-col :xs="24" :sm="24" :md="12" :lg="18" style="height: 100%">
                            <div class="title">销售趋势</div>
                            <sell-chart />
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" style="height: 100%">
                            <div class="title title2" style="padding-left: 0">门店销售额排名</div>
                            <div class="list-box">
                                <div class="sell-list" v-for="(item, index) in 7">
                                    <div class="left">
                                        <div class="index">{{index + 1}}</div>
                                        <span class="name">工专路 {{index + 1}} 号店</span>
                                    </div>
                                    <div class="count">323,234</div>
                                </div>
                            </div>
                        </a-col>
                    </a-row>
                </a-tab-pane>
                <a-tab-pane key="2" tab="访问量" force-render>
                </a-tab-pane>
                <div class="date" slot="tabBarExtraContent">
                    <a-row :gutter="24">
                        <a-col :xs="0" :lg="12" class="date-left">
                            <a-radio-group default-value="a" button-style="solid">
                                <a-radio-button value="a">
                                    今日
                                </a-radio-button>
                                <a-radio-button value="b">
                                    本周
                                </a-radio-button>
                                <a-radio-button value="c">
                                    本月
                                </a-radio-button>
                                <a-radio-button value="d">
                                    全年
                                </a-radio-button>
                            </a-radio-group>
                        </a-col>
                        <a-col :xs="0" :sm="24" :lg="12">
                            <a-range-picker @change="changeDate" />
                        </a-col>
                    </a-row>
                </div>
            </a-tabs>
        </div>
    </div>
</template>

<script>
    import SellChart from './SellChart'
    export default {
        name: "MidView",
        data () {
            return {
                animated: false,
            }
        },
        components: {
            SellChart
        },
        methods: {
            changeTab () {},
            changeDate() {}
        }
    }
</script>

<style lang="less">
.midView-container {
    background-color: #fff;
    border-radius: 2px;
    min-height: 432px;
    .ant-tabs-bar {
        padding: 0 16px;
        margin: 0;
    }
    .ant-tabs-nav-scroll {
        .ant-tabs-tab {
            padding-left: 0;
            padding-right: 0;
            font-size: 16px;
        }
    }
    .date-left {
        text-align: right;
    }
    .content {
        padding: 24px 0;
        .title {
            font-size: 16px;
            color: rgba(0, 0, 0, .85);
            padding-left: 24px;
        }
        .list-box {
            margin-top: 25px;
            padding-right: 24px;
            .sell-list {
                margin-top: 16px;
                color: rgba(0, 0, 0, .85);
                height: 22px;
                display: flex;
                align-items: center;
                font-size: 14px;
                justify-content: space-between;
                .index {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    background-color: #314659;
                    font-size: 12px;
                    border-radius: 20px;
                    color: #fff;
                    margin-right: 16px;
                    display: inline-block;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .list-box {
            padding-left: 72px;
            padding-right: 36px;
        }
        .title2 {
            padding-left: 72px !important;
        }
    }
}
</style>