<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">

            <router-link class="navbar-brand" to="/">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="">
            </router-link>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="link in links" :key="link.name">
                        <router-link
                            class="nav-link active"
                            :class="is_active(link.name)"
                            :to="{ name: link.url_name }">
                            {{ link.tag }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="ad" class="nav-link" to="/">
                            <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7482b3ad2cd14edda31f05399c2ae759~tplv-k3u1fbpfcp-zoom-1.image?" alt="">
                        </router-link>
                    </li>
                </ul>

                <ul class="navbar-nav">

                    <li class="nav-item">
                        <input type="email" class="form-control" placeholder="探索稀土掘金">
                    </li>

                    <li class="nav-item ms-4">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">创作者中心</button>
                            <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><router-link class="dropdown-item" to="/">Dropdown link</router-link></li>
                                <li><router-link class="dropdown-item" to="/">Dropdown link</router-link></li>
                            </ul>
                        </div>
                    </li>
                    
                    <li class="nav-item ms-4">
                        <router-link class="nav-link" to="/">
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
                            <span>会员</span>
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
        
    </nav>
</template>

<script>
    import { useRoute } from "vue-router";

    export default {
        setup() {
            const route = useRoute();

            const links = [{
                    tag: "首页",
                    name: "home",
                    url_name: "all",
                }, {
                    tag: "沸点",
                    name: "hot_dot",
                    url_name: "hot_dot"
                }, {
                    tag: "课程"
                }, {
                    tag: "直播"
                }, {
                    tag: "活动"
                }, {
                    tag: "商城"
                }
            ];

            const is_active = function(name) {
                const components = route.matched;
                for (let i = 0; i < components.length; i++)
                    if (components[i].name === name)
                        return "my_active";
                return "";
            };

            console.log(route.matched);

            return {
                links,
                is_active
            }
        }
    }
</script>

<style scoped>
    .navbar-brand {
        padding: 0;
    }
    .navbar-brand > img {
        height: 22px;
    }

    #ad {
        padding: 0;
    }
    #ad > img {
        height: 40px;
    }

    .my_active {
        color: rgb(0,127,255) !important;
    }
</style>