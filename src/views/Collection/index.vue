<template>
  <div>
    <van-nav-bar
      class="Title"
      title="收藏列表"
      left-arrow
       :fixed='true'
      @click-left="onClickLeft"
    />
    <div
      class="listbox"
      v-for="(item, index) in listobj"
      :key="index"
      @click="clickFn(item.houseCode)"
    >
      <div class="imgleft">
        <img class="img" :src="`${img}${item.houseImg}`" alt="" />
      </div>
      <div class="listbox1">
        <p class="Htitle">{{ item.title }}</p>
        <div class="text1">{{ item.desc }}</div>
        <div class="text2">
          <span>{{ item.tags[0] }}</span>
        </div>
        <div class="text3">
          <span class="text4">{{ item.price }}</span> 元/月
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collecTion } from '@/api/user'
export default {
  data() {
    return {
      listobj: [],
      img: 'http://liufusong.top:8080'
    }
  },
  created() {
    this.listData()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async listData() {
      try {
        const res = await collecTion()
        console.log(res)
        this.listobj = res.data.body
      } catch (error) {}
    },
    clickFn(id) {
      this.$router.push({
        path: '/collfn',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.Title {
  background-color: #21b97a;
}
:deep(.van-nav-bar__title) {
  color: #fff;
  font-size: 36px;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
// 列表样式
.listbox {
  display: flex;
  padding-top: 100px;
  .img {
    width: 212px;
    height: 160px;
    margin: 0 20px 0 0;
  }
  .Htitle {
    font-size: 30px;
    line-height: 0px;
  }
  .text1 {
    font-size: 20px;
    line-height: 0px;
    padding: 5px 0;
  }
  .text2 {
    color: #39becd;
    background: #e1f5f8;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    margin-top: -10px;
  }
  .text3 {
    font-size: 12px;
    color: #fa5741;
  }
  .text4 {
    font-size: 30px;
    font-weight: 700;
    margin-top: -10px;
  }
}
</style>
