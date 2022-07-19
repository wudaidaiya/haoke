<template>
  <div class="page-container">
    <!-- 轮播图 -->
    <div class="box1">
      <div class="box2" @click="cityFn">
        北京<van-icon class="jiantou" name="play" />
      </div>
      <div class="box3">
        <van-icon class="sousuo" name="search" />
        <input type="text" placeholder="请输入搜索内容" />
      </div>
      <van-icon class="Map" name="location-o" />
    </div>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <!-- 搜索 -->
      <van-swipe-item v-for="item in imgdata" :key="item.id"
        ><img
          :src="`${img}${item.imgSrc}`"
          :alt="`${item.alt}`"
          style="width: 100%; height: 212px; vertical-align: top"
      /></van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid class="grid" :border="false">
      <van-grid-item><van-icon name="home-o" /><span>整租</span></van-grid-item>
      <van-grid-item
        ><van-icon name="contact" /><span>合租</span></van-grid-item
      >
      <van-grid-item
        ><van-icon name="location-o" /><span>查看地图</span></van-grid-item
      >
      <van-grid-item
        ><van-icon name="wap-home-o" /><span>去出租</span></van-grid-item
      >
    </van-grid>
  </div>
</template>

<script>
import { pages } from '@/api/user'
export default {
  name: 'PageIndex',
  data() {
    return {
      imgdata: [],
      img: 'http://liufusong.top:8080'
    }
  },
  created() {
    this.pages()
  },
  methods: {
    // 轮播图渲染
    async pages() {
      try {
        const res = await pages()
        console.log(res)
        this.imgdata = res.data.body
      } catch (error) {}
    },
    // 城市列表
    cityFn() {
      this.$router.push('/citylist')
    }
  }
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
// 搜索框
.box1 {
  display: flex;
  position: absolute;
  top: 0;
  width: 600px;
  height: 70px;
  background-color: #fff;
  margin-top: 30px;
  margin-left: 76px;
  border-radius: 10px;
  z-index: 9;
  .box2 {
    display: flex;
    position: relative;
    height: 50px;
    width: 100px;
    border-right: 1px solid #e5e5e5;
    padding-top: 15px;
    padding-left: 10px;
    font-size: 30px;
    color: #666;
    .jiantou {
      margin-left: -10px;
      margin-top: -8px;
      transform: rotate(90deg);
    }
  }
  .box3 {
    margin-left: 70px;
    display: flex;
    position: absolute;

    .sousuo {
      position: relative;
      top: 15px;
      left: 60px;
      font-size: 40px;
    }
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-left: 5px;
    border: 1px solid #fff;
    padding-left: 70px;
    font-size: 25px;
    padding-top: 18px;
  }
  .Map{
    position: absolute;
    right: -60px;
    top: 10px;
    color: #fff;
  }
}
// 宫格
.grid {
  padding-top: 20px;
  span {
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>
