<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.css";
  import "bootstrap/dist/js/bootstrap.js";
  import Navbar from "./components/NavBar.vue";

  export default {
    components: { Navbar }
  }
</script>