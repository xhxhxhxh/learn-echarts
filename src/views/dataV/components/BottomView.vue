<template>
    <div class="bottomView-container">
        <a-row :gutter="24" >
            <a-col :xs="24" :xl="12" style="margin-bottom: 24px">
                <a-card :loading="loading" title="线上热门搜索" :bordered="bordered">
                    <div class="content">
                        <div class="line-chart-area">
                            <div class="left">
                                <div class="user-count">
                                    <span class="count">搜索用户数</span>
                                    <a-tooltip>
                                        <template slot="title">
                                            说明
                                        </template>
                                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)"/>
                                    </a-tooltip>
                                </div>
                                <div class="value">
                                    <span class="num">12,321</span>
                                    <span class="num2">
                                        <span>17.1</span>
                                        <span class="icon">
                                            <a-icon type="caret-up" style="color: rgb(245, 34, 45)"/>
                                        </span>
                                    </span>
                                </div>
                                <count-chart />
                            </div>
                            <div class="left">
                                <div class="user-count">
                                    <span class="count">人均搜索次数</span>
                                    <a-tooltip>
                                        <template slot="title">
                                            说明
                                        </template>
                                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)"/>
                                    </a-tooltip>
                                </div>
                                <div class="value">
                                    <span class="num">2.7</span>
                                    <span class="num2">
                                        <span>26.1</span>
                                        <span class="icon down">
                                            <a-icon type="caret-down" style="color: rgb(82, 196, 26)"/>
                                        </span>
                                    </span>
                                </div>
                                <count-chart />
                            </div>
                        </div>
                        <div class="table-area">
                            <a-table :columns="columns" :data-source="data" rowKey="id" size="middle" :bordered="bordered">
                                <span slot="rank" slot-scope="text, record, index">{{ index + 1 }}</span>
                                <a slot="keyWord" slot-scope="text">{{ text }}</a>
                            </a-table>
                        </div>
                    </div>
                </a-card>
            </a-col>
            <a-col :xs="24" :xl="12" style="margin-bottom: 24px">
                <a-card :loading="loading" title="销售额类别占比" :bordered="bordered" class="sell-area">
                    <a-radio-group default-value="a" button-style="solid" slot="extra">
                        <a-radio-button value="a">
                            全部渠道
                        </a-radio-button>
                        <a-radio-button value="b">
                            线上
                        </a-radio-button>
                        <a-radio-button value="c">
                            门店
                        </a-radio-button>
                    </a-radio-group>
                    <div class="content">
                        <div class="pie-chart-area">
                            <sell-pie-chart />
                        </div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import CountChart from './CountChart'
    import SellPieChart from './SellPieChart'

    const data = [
        {
            id: 1,
            keyWord: '搜索关键词-0',
            userNum: '289',
            percent: '25%'
        },
        {
            id: 2,
            keyWord: '搜索关键词-1',
            userNum: '259',
            percent: '23%'
        },
        {
            id: 3,
            keyWord: '搜索关键词-2',
            userNum: '220',
            percent: '20%'
        },
        {
            id: 4,
            keyWord: '搜索关键词-3',
            userNum: '188',
            percent: '18%'
        },
        {
            id: 5,
            keyWord: '搜索关键词-4',
            userNum: '120',
            percent: '15%'
        }
    ]

    export default {
        name: "BottomView",
        data () {
            return {
                loading: false,
                bordered: false,
                data: data,
                columns: [
                    {
                        title: '排名',
                        key: 'rank',
                        scopedSlots: { customRender: 'rank' },
                    },
                    {
                        title: '搜索关键词',
                        dataIndex: 'keyWord',
                        key: 'keyWord',
                        scopedSlots: { customRender: 'keyWord' },
                    },
                    {
                        title: '用户数',
                        dataIndex: 'userNum',
                        key: 'userNum',
                    },
                    {
                        title: '周涨幅',
                        dataIndex: 'percent',
                        key: 'percent',
                    },
                ]
            }
        },
        components: {
            CountChart,
            SellPieChart
        }
    }
</script>

<style lang="less">
.bottomView-container {
    margin-top: 24px;
    .content {
        height: 410px;
        .line-chart-area {
            display: flex;
            justify-content: space-between;
            .left {
                width: 48%;
            }
            .user-count {
                display: flex;
                align-items: center;
                .count {
                    color: rgba(0,0,0,.45);
                    font-size: 14px;
                    margin-right: 8px;
                }
            }
            .value {
                margin-top: 8px;
                .num {
                    display: inline-block;
                    height: 32px;
                    margin-right: 32px;
                    color: rgba(0,0,0,.85);
                    font-size: 24px;
                    line-height: 32px;
                }
                .num2 {
                    color: rgba(0,0,0,.45);
                    font-size: 16px;
                    vertical-align: top;
                    line-height: 32px;
                }
            }
        }
        .table-area {
            margin-top: 24px;
            th, td {
                padding-top: 9px !important;
                padding-bottom: 9px !important;
            }
            .ant-pagination {
                margin-bottom: 0;
            }
        }
    }
    .sell-area {
        .ant-card-extra {
            padding: 0;
        }
        .content {
            .pie-chart-area {
                height: 100%;
            }
        }
    }
}
</style>