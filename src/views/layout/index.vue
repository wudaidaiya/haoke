<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- 标签导航栏 -->
    <van-tabbar route active-color="#21b97a" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/page">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/find">找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/consulting">咨询</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/myde">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="scss"></style>
