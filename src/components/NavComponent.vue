<template>
    <ul class="nav justify-content-center">
        <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link
                class="nav-link link"
                :class="is_active(link.name)"
                :to="{ name: link.url_name }">
                {{ link.tag }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    import { useRoute } from "vue-router";

    export default {
        props: ["links"],
        setup() {
            const route = useRoute();

            const is_active = function(name) {
                const components = route.matched;
                for (let i = 0; i < components.length; i++)
                    if (components[i].name === name)
                        return "active";
                return "inactive";
            };

            return {
                is_active
            }
        }
    }
</script>

<style scoped>
    .link {
        padding-left: 1px;
        font-size: 0.9em;
    }

    .active {
        color: rgb(0, 127, 255);
    }

    .inactive {
        color: rgb(113, 119, 124);
    }
</style>