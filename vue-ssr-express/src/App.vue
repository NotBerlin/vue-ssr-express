<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/detail">详情</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
</style>