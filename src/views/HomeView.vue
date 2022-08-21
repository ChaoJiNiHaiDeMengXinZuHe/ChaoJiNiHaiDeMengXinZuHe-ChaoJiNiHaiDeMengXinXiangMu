<template>
    <div>
        <Nav :links="links"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from "../components/NavComponent.vue";

    export default {
        components: { Nav },
        setup() {
            const links = [{
                    tag: "综合",
                    name: "all",
                    url_name: "all"
                }, {
                    tag: "关注",
                }, {
                    tag: "后端"
                }, {
                    tag: "前端"
                }, {
                    tag: "Android"
                }, {
                    tag: "iOS"
                }, {
                    tag: "人工智能"
                }, {
                    tag: "开发工具"
                }, {
                    tag: "代码人生"
                }, {
                    tag: "阅读"
                }
            ];

            return {
                links
            }
        }
    }
</script>