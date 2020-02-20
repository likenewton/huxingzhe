import Api from 'assets/js/api.js'
import router from '../router'

export default {
  getUserInfo(context) {
    _axios.send({
      method: 'get',
      url: _axios.ajaxAd.getLoginInfo,
      done: (res) => {
        context.commit('SET_USERINFO', { userInfo: res.data }) // 保存功能按钮权限
      }
    })
  }
}
