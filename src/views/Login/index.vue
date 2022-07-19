<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      :fixed="true"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 注册登录 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="username"
        placeholder="请输入账户"
        :rules="userF.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="userF.password"
      />
      <div style="margin: 16px">
        <van-button class="btn" block native-type="submit">登录</van-button>
      </div>
    </van-form>
    <span class="bott">还没有账号，去注册</span>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      userF: {
        username: [
          {
            required: true,
            message: '账号不能为空'
          },
          {
            pattern: /^[A-Za-z0-9]{3,9}$/,
            message: '账号错误'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空'
          },
          {
            pattern: /^[A-Za-z0-9]{6,12}$/,
            message: '密码错误'
          }
        ]
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async onSubmit() {
      // 登陆提示
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      // 成功
      try {
        const { data } = await login(this.user)
        // console.log(res)
        this.$store.commit('setUser', data.body)
        this.$router.back()
        this.$toast.success('登陆成功')
      } catch (err) {
        // 失败
        if (err.response.status === 400) {
          this.$toast.fail('账户或密码错误')
        } else {
          this.$toast.fail('登陆失败')
        }
      }
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
.bott {
  font-size: 20px;
  color: #666;
  margin-left: 260px;
}
</style>
