<template>
  <div>
    <!-- 详情 -->
    <div class="navnav">
    <van-nav-bar
      class="Title"
      :title="list.community"
      left-arrow
      :fixed='true'
      @click-left="onClickLeft"
    />
    </div>
    <!-- 图片 -->

    <div>
      <img
        :src="`http://liufusong.top:8080${list.houseImg}`"
        alt=""
        style="width: 100%; vertical-align: top"
      />
    </div>
    <!-- 房子简介 -->
    <div class="boxmax">
      <div class="box1">
        <p class="p1">{{list.description}}</p>
        <span>{{list.tags[0]}}</span>
      </div>
      <hr />
      <div class="box3">
        <ul>
          <li>
            <div>{{list.price}}/月</div>
            <p>租金</p>
          </li>
          <li>
            <div>{{list.roomType}}</div>
            <p>房型</p>
          </li>
          <li>
            <div>{{list.size}}平米</div>
            <p>面积</p>
          </li>
        </ul>
      </div>
      <hr />
      <div class="box5">
        <div>
          <p><span>装修:</span><em>精装</em></p>
          <p>
            <span>楼层:</span><em>{{list.floor}}</em>
          </p>
        </div>
        <div class="left1">
          <p><span>朝向:</span><em>{{list.oriented[0]}}</em></p>
          <p><span>类型:</span><em>普通住宅</em></p>
        </div>
      </div>

      <!-- 小区 -->
      <div class="box6">
        <p>小区：天山星城</p>
        <div class="imgnull">
          <span
            >© 2022 Baidu - GS(2021)6026号 - 甲测资字11111342 - 京ICP证030173号
            - Data © 长地万方</span
          >
        </div>
        <h4>房屋配套</h4>
        <p><van-icon class="icons" name="shop-o" /></p>
        <p class="p3">洗衣机</p>
      </div>
      <!-- 房源概况 -->
      <div>
        <div>
          <h4>房源概况</h4>
          <div class="rooms">
            <div>
              <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
            </div>
            <div class="text">
              <p>王女士</p>
              <p>
                <span><van-icon name="shield-o" /></span><span>已认证房主</span>
              </p>
            </div>
            <button>发消息</button>
          </div>
          <p>
            <span class="text3"
              >1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
              2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
              3.人车分流，环境优美。
              4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。</span
            >
          </p>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div>
      <div class="listbox">
        <div class="imgleft">
          <img
            class="img"
            alt=""
            src="http://liufusong.top:8080/img/message/1.png"
          />
        </div>
        <div class="listbox1">
          <p class="Htitle">安贞西里 3室1厅</p>
          <div class="text1">72.32㎡/南 北/低楼层</div>
          <div class="text2">
            <span>随时看房</span>
          </div>
          <div class="text3"><span class="text4">4500</span> 元/月</div>
        </div>
      </div>
      <div class="listbox">
        <div class="imgleft">
          <img
            class="img"
            alt=""
            src="http://liufusong.top:8080/img/message/2.png"
          />
        </div>
        <div class="listbox1">
          <p class="Htitle">天居园 2室1厅</p>
          <div class="text1">83㎡/南/高楼层</div>
          <div class="text2">
            <span>近地铁</span>
          </div>
          <div class="text3"><span class="text4">7200</span> 元/月</div>
        </div>
      </div>
      <div class="listbox">
        <div class="imgleft">
          <img
            class="img"
            alt=""
            src="http://liufusong.top:8080/img/message/3.png"
          />
        </div>
        <div class="listbox1">
          <p class="Htitle">角门甲4号院 1室1厅</p>
          <div class="text1">52㎡/西南/低楼层</div>
          <div class="text2">
            <span>集中供暖</span>
          </div>
          <div class="text3"><span class="text4">4300</span> 元/月</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRoom } from '@/api/user'
export default {
  data() {
    return {
      list: {}
    }
  },
  created() {
    this.getRoom()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    async getRoom() {
      try {
        const res = await getRoom(this.$route.query.id)
        console.log(res)
        this.list = res.data.body
        console.log(this.list)
      } catch (error) {}
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
// 列表
.listbox {
  display: flex;
  padding-top: 20px;
  .img {
    width: 212px;
    height: 160px;
    margin: 0 20px 0 20px;
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
.boxmax {
  padding: 20px;
}
// 房子简介
.box1 {
  .p1 {
    line-height: 0px;
    font-size: 35px;
  }
  span {
    display: inline-block;
    width: 110px;
    height: 50px;
    background-color: #e1f5f8;
    color: #39becd;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
  }
}
.box3 {
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    li {
      text-align: center;
      div {
        color: red;
        font-size: 40px;
      }
      p {
        font-size: 30px;
        color: #999;
      }
    }
  }
}
.box5 {
  display: flex;
  div {
    font-size: 30px;
    span {
      color: #999;
    }
    em {
      font-style: normal;
    }
  }
  .left1 {
    margin-left: 200px;
  }
}
.box6 {
  p {
    font-size: 30px;
  }
  .imgnull {
    width: 100%;
    height: 240px;
    background-color: rgb(95, 196, 246);
    overflow: hidden;
    span {
      white-space: nowrap;
      display: inline-block;
      margin-top: 200px;
      font-size: 16px;
    }
  }
  h4 {
    font-size: 33px;
  }
  .icons {
    font-size: 60px;
    margin-left: 30px;
  }
  .p3 {
    font-size: 28px;
    margin-left: 20px;
  }
}
.rooms {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 30px;
  }
  button {
    width: 150px;
    height: 60px;
    font-size: 30px;
    margin-left: 250px;
  }
  .text {
    margin-left: 30px;
    p {
      line-height: 20px;
      span {
        color: red;
      }
    }
  }
}
.text3 {
  font-size: 30px;
  line-height: 35px;
}
</style>
