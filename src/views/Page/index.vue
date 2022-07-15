<template>
  <div class="page-container">
    <!-- 轮播图 -->
    <div class="box1">北京</div>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <!-- 搜索 -->
      <van-swipe-item
        ><img
          src="http://liufusong.top:8080/img/swiper/1.png"
          alt="http://liufusong.top:8080/img/swiper/1.png"
          style="width: 100%; height: 212px; vertical-align: top"
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="http://liufusong.top:8080/img/swiper/2.png"
          alt="http://liufusong.top:8080/img/swiper/2.png"
          style="width: 100%; height: 212px; vertical-align: top"
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="http://liufusong.top:8080/img/swiper/3.png"
          alt="http://liufusong.top:8080/img/swiper/3.png"
          style="width: 100%; height: 212px; vertical-align: top"
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 424px;
  text-align: center;
  background-color: #39a9ed;
}
body {
  position: relative;
}
.box1 {
  position: absolute;
  top: 0;
  width: 500px;
  height: 100px;
  background-color: #fff;
  z-index: 999;
}
</style>
