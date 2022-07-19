import request from '@/utils/request'
import store from '@/store'
export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}
// 1 请求数据我的
export const userName = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: store.state.user.token
    }
  })
}
// 收藏列表
export const collecTion = () => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: store.state.user.token
    }
  })
}
export const pages = () => {
  return request({
    url: '/home/swiper'
  })
}
// 城市列表/area/city
export const getCityListAPI = () => {
  return request({
    url: '/area/city',
    params: {
      level: 1
    }
  })
}
// 热门城市
export const getHotCityListAPI = () => {
  return request({
    url: '/area/hot'
  })
}

export const getRoom = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
