<template>
  <div class="hello">
    <!-- {{msg}}  -->
    
    <!-- 此组件为空路由 用来渲染二级子路由 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
