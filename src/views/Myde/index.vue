<template>
  <div class="myde-container">
    <!-- 背景图 -->
    <div class="box">
      <img
        class="img"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt="背景图"
      />
      <!-- 阴影盒子 -->
      <div class="tourist">
        <div class="tourist_son">
          <img
            class="img"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="box1">游客</div>
        <van-button class="btn1" @click="clickFn">去登录</van-button>
      </div>
    </div>
    <!-- 宫格 -->
    <van-grid :border="false" :column-num="3" class="grid">
      <van-grid-item>
        <span><van-icon name="star-o" /></span>
        <p class="txt">我的收藏</p>
      </van-grid-item>
      <van-grid-item>
        <span><van-icon name="wap-home-o" /></span>
        <p class="txt">我的出租</p>
      </van-grid-item>
      <van-grid-item>
        <span><van-icon name="underway-o" /></span>
        <p class="txt">看房记录</p>
      </van-grid-item>
      <van-grid-item>
        <span><van-icon name="balance-list-o" /></span>
        <p class="txt">成为房主</p>
      </van-grid-item>
      <van-grid-item>
        <span><van-icon name="friends-o" /></span>
        <p class="txt">个人资料</p>
      </van-grid-item>
      <van-grid-item>
        <span><van-icon name="service-o" /></span>
        <p class="txt">联系我们</p>
      </van-grid-item>
    </van-grid>
    <div class="box3">
      <img
        src="http://liufusong.top:8080/img/profile/join.png"
        alt=""
        class="img1"
      />
    </div>
    <!-- 底部导航 -->
  </div>
</template>

<script>
export default {
  name: 'MydeIndex',
  methods: {
    clickFn() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
// 上方大盒子
.box {
  min-height: 600px;
  position: relative;
}
// 阴影盒子
.tourist {
  position: absolute;
  background: #fff;
  width: 80%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.img {
  width: 100%;
}
// 游客上方小图片
.tourist_son {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 140px;
  height: 140px;
  border: 10px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
// 游客文字
.box1 {
  margin-top: -40px;
  margin-bottom: 40px;
  font-size: 32px;
}
// 按钮
.btn1 {
  height: 60px;
  width: 138px;
  background-color: #21b97a;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
}
// p标签文字
.txt {
  font-size: 16px;
}
// 格子
.grid {
  margin-top: 20px;
}
.img1 {
  width: 96%;
}
.box3 {
  margin-left: 30px;
}
</style>
