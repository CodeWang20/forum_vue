<template>
  <div id="app">
      <head-nav-com></head-nav-com>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import HeadNavCom from "@/components/content/HeadNav/index"
export default {

    components:{
        HeadNavCom
    }
}
</script>

<style>
    @import "assets/css/base.css";
</style>
