<template>
    <a-config-provider :getPopupContainer="getPopupContainer" :locale="locale">
        <div class="app-container" id="app">
            <!--<h1 class="header">大屏图表展示</h1>-->
            <router-view></router-view>
            <a-drawer
                    title="Basic Drawer"
                    placement="right"
                    :closable="false"
                    :visible="visible"
                    @close="onClose"
            >
                <a-radio-group name="radioGroup" default-value="default" @change="changeTheme">
                    <a-radio value="default">
                        default
                    </a-radio>
                    <a-radio value="dark">
                        dark
                    </a-radio>
                    <a-radio value="blue">
                        blue
                    </a-radio>
                </a-radio-group>
                <a-button type="primary" @click="showDrawer" class="showDrawer">
                    换肤
                </a-button>
            </a-drawer>
            <a-button type="primary" @click="showDrawer" class="showDrawer2">
                换肤
            </a-button>
        </div>
    </a-config-provider>
</template>

<script>
    import zhCN from 'ant-design-vue/es/locale/zh_CN';

    export default {
        name: "app",
        data(){
            return {
                rootUrl: this.$store.state.rootUrl,
                locale: zhCN,
                visible: false
            }
        },
        created() {

        },
        mounted() {
            this.resize()
        },
        components: {
        },
        methods: {
            getPopupContainer(el, dialogContext) {
                if (dialogContext) {
                    return dialogContext.getDialogWrap();
                } else {
                    return document.body;
                }
            },
            onClose() {
                this.visible = false;
            },
            showDrawer() {
                this.visible = !this.visible;
            },

            changeTheme(e) {
                const theme = e.target.value
                if(theme === 'default') {
                    document.documentElement.dataset.theme = ''
                }else {
                    document.documentElement.dataset.theme = theme
                }

            },

            // 动态改变rem值
            resize () {
                const baseScreenWidth = 1920;
                const baseFontSize = 100;
                const screenWidth = window.innerWidth;
                document.documentElement.style.fontSize = screenWidth / baseScreenWidth * baseFontSize + 'px';
                window.onresize =  () => {
                    const screenWidth = window.innerWidth;
                    document.documentElement.style.fontSize = screenWidth / baseScreenWidth * baseFontSize + 'px';
                }
            },
        },
    }
</script>

<style lang="less">
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color: var(--primary);
    }
    .app-container {
        height: 100%;
        width: 100%;
        min-height: 320px;
        position: relative;
        /*padding: 24px;*/
        > .header {
            text-align: center;
            margin-bottom: 24px;
        }
        .showDrawer2 {
            width: 70px;
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .showDrawer {
        width: 70px;
        position: absolute;
        left: -70px;
        top: 50%;
        transform: translateY(-50%);
    }
    .ant-drawer-content {
        overflow: unset;
    }

</style>
