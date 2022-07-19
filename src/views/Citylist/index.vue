<template>
  <div class="city-container">
    <!-- 头部标题栏S -->
    <div class="header">
      <!-- 头部 -->
      <van-nav-bar
        class="Title"
        title="城市列表"
        left-arrow
         :fixed='true'
        @click-left="onClickLeft"
      />
    </div>
    <!-- 头部标题栏E -->
    <!-- 城市列表展示S -->
    <div class="city">
      <!-- 当前城市S -->
      <div class="now-city">
        <van-cell-group>
          <van-cell title="当前城市" label="杭州" ><span>#</span></van-cell>
        </van-cell-group>
      </div>
      <!-- 当前城市E -->
      <!-- 热门城市S -->
      <div class="hot-city">
        <van-cell-group>
          <div class="hot-city-title">热门城市</div>
          <van-cell
            :value="item.label"
            v-for="(item, index) in hotCityList"
            :key="index"
          ></van-cell>
        </van-cell-group>
      </div>
      <!-- 热门城市E -->
      <!-- 城市列表E -->
      <van-index-bar
        :sticky="false"
        highlight-color="#21b97a"
        class="city-list"
      >
        <van-index-anchor
          v-for="(item, index) in firstNameList"
          :key="index"
          :index="index"
        >
          <span>{{ item.length == 0 ? '' : index }}</span>
          <van-cell
            @click="chooseCity(citem)"
            v-for="(citem, cindex) in item"
            :key="cindex"
            :title="citem"
          />
        </van-index-anchor>
      </van-index-bar>
      <!-- 城市列表E -->
    </div>
    <!-- 城市列表展示E -->
  </div>
</template>

<script>
// 导入获取城市列表的请求方法
import { getCityListAPI, getHotCityListAPI } from '@/api/user'
import pinyin from 'js-pinyin/index.js'
// 引入头部组件
export default {
  name: 'HaokeRoomIndex',
  data() {
    return {
      cityList: {},
      cityNameList: [],
      FirstPin: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      firstNameList: [],
      nameFirst: [],
      hotCityList: []
    }
  },

  mounted() {},
  computed: {
    computedCityList() {
      return this.cityList.map((item) => item.type)
    }
  },
  methods: {
    // 城市列表
    async getCityList() {
      try {
        const res = await getCityListAPI()
        this.cityList = res.data.body
        console.log(res)

        this.cityList.forEach((item) => {
          this.cityNameList.push(item.label)
          // console.log((item.short).substring(0, 1))
        })
        // console.log(this.cityName)
        const firstName = {}
        this.FirstPin.forEach((item) => {
          firstName[item] = []
          this.cityNameList.forEach((el) => {
            const first = pinyin.getFullChars(el).substring(0, 1)
            this.nameFirst.push(first)
            if (first === item) {
              firstName[item].push(el)
            }
          })
          this.firstNameList = firstName
        })
        // console.log(this.nameFirst);
      } catch (error) {
        this.$toast('获取数据失败！')
      }
    },
    onClickLeft() {
      this.$router.back()
    },
    // 热门城市
    async getHotCityList() {
      const res = await getHotCityListAPI()
      this.hotCityList = res.data.body
      console.log(this.hotCityList)
    }
  },
  created() {
    this.getCityList()
    this.getHotCityList()
  }
}
</script>

<style lang="less" scoped>
.city {
  padding-top: 100px;
  .hot-city-title {
    padding-left: 30px;
    font-size: 28px;
    color: #999;
  }
  .city-list {
    :deep(.van-cell) {
      padding-left: 0;
    }
    :deep(.van-index-bar__index) {
      top: 77%;
    }
    :deep(.van-index-bar__index) {
      width: 15px;
      height: 28px;
      font-size: 14px;
      font-weight: normal;
    }
  }
}
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
:deep(.van-index-bar__index) {
padding-top: 10px;
}
</style>
