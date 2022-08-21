<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">

            <router-link class="navbar-brand" to="#">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="">
            </router-link>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">沸点</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">课程</router-link>
                    </li>
                    <li class="nav-item">
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">直播</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">活动</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">商城</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">APP</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">插件</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="ad" class="nav-link" to="#">
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
                                <li><router-link class="dropdown-item" to="#">Dropdown link</router-link></li>
                                <li><router-link class="dropdown-item" to="#">Dropdown link</router-link></li>
                            </ul>
                        </div>
                    </li>
                    
                    <li class="nav-item ms-4">
                        <router-link class="nav-link" to="#">
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg">
                            <span>会员</span>
                        </router-link>
                    </li>

                </ul>

            </div>
        </div>
        
    </nav>
</template>

<style scoped>
    .navbar-brand {
        padding: 0;
    }
    .navbar-brand > img {
        height: 22px;
    }

    #home {
        color: rgb(30, 162, 255);
    }

    #ad {
        padding: 0;
    }
    #ad > img {
        height: 40px;
    }

    #triangle {
        width: 20px;
        padding: auto 0;
    }
    #triangle > a {
        padding: 0 auto;
    }

    #member {
        margin: auto;
    }
</style>