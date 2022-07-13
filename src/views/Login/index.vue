<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <!-- 注册登录 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账户"
        :rules="[{ required: true, }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, }]"
      />
      <div style="margin: 16px">
        <van-button class="btn" block native-type="submit">登录</van-button>
      </div>
    </van-form>
    <span class="bott">还没有注册</span>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async onSubmit() {
      const res = await login(this.username, this.password)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
}
:deep(.van-nav-bar__title) {
  color: #fff;
  font-weight: 500;
  font-size: 36px;
}
:deep(.van-icon) {
  color: #fff;
}
:deep(.van-field__value) {
  height: 120px;
  color: #999;
  font-size: 36px;
  border-bottom: 1px solid #333;
}
:deep(.van-field__control) {
 padding-top: 40px;
}
.btn {
  width: 680px;
  height: 100px;
  margin-top: 30px;
  background-color: #21b97a;
  color: #fff;
  font-size: 30px;
}
:deep(.van-cell::after) {
  border: 0px;
}
.bott{
    font-size: 20px;
    color: #666;
    margin-left: 300px;
}
</style>
