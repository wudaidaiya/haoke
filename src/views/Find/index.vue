<template>
  <div class="find-container">
    <!-- 头部 -->
    <div>
      <div class="box4">
        <van-icon class="backs" name="arrow-left" @click='onClickLeft'/>
        <div class="box1">
          <div class="box2">北京<van-icon class="jiantou" name="play" /></div>
          <div class="box3">
            <van-icon class="sousuo" name="search" />
            <input type="text" placeholder="请输入搜索内容" />
          </div>
          <van-icon class="Map" name="location-o" />
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="区域" class="tan" @click="showPopup">
        <van-popup
          class="tan"
          position="top"
          :style="{ height: '30%' }"
          v-model="isshow"
          >内容</van-popup
        >
      </van-tab>
      <!-- <van-tab title="方式">
        <van-popup class="tan" v-model="isshow">内容</van-popup>
      </van-tab>
      <van-tab title="租金">
        <van-popup class="tan" v-model="isshow">内容</van-popup>
      </van-tab>
      <van-tab title="筛选">
        <van-popup class="tan" v-model="isshow">内容</van-popup>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'FindIndex',
  data() {
    return {
      active: 0,
      isshow: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    showPopup() {
      this.isshow = true
      console.log(111)
    }
  }
}
</script>

<style scoped lang="less">
// 头部
.box4 {
  position: relative;
  height: 100px;
  width: 100%;
  background-color: #21b97a;
  .backs {
    margin-top: 30px;
    margin-left: 30px;
    color: #fff;
    font-size: 40px;
  }
}
.box1 {
  display: flex;
  position: absolute;
  top: 20px;
  margin-left: 100px;
  width: 550px;
  height: 70px;
  background-color: #fff;
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
  .Map {
    position: absolute;
    right: -60px;
    top: 10px;
    color: #fff;
  }
}
.tan {
  z-index: 999;
}
</style>
