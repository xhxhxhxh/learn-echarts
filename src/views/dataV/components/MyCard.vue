<template>
    <a-card :loading="loading" :title="title" class="my-card" :bordered="bordered">
        <a-tooltip slot="extra">
            <template slot="title">
                {{ tip }}
            </template>
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)"/>
        </a-tooltip>
        <slot></slot>
    </a-card>
</template>

<script>
    export default {
        name: "MyCard",
        props: ['title', 'tip'],
        data () {
            return {
                loading: false,
                bordered: false
            }
        }
    }
</script>

<style lang="less">
    .my-card {
        height: 180px;
        margin-bottom: 24px;
        .ant-card-body {
            padding-bottom: 8px;
            padding-top: 0;
        }
        .ant-card-head {
            border-bottom: 0;
            color: rgba(0,0,0,.45);
            font-size: 14px;
            line-height: 22px;
            min-height: unset;
            .ant-card-head-title, .ant-card-extra {
                padding-bottom: 5px;
            }
        }
        .value {
            overflow: hidden;
            color: rgba(0,0,0,.85);
            font-size: 30px;
            line-height: 38px;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
        }
        .footer {
            border-top: 1px solid #f0f0f0;
            padding-top: 10px;
            line-height: 22px;
            color: rgba(0,0,0,.85);
        }
        .content {
            margin-bottom: 12px;
        }
    }
</style>