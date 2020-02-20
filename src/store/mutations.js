const SET_USERINFO = 'SET_USERINFO' // 用户信息

export default {
  [SET_USERINFO](state, paras) {
    state.userInfo = paras.userInfo
  }
}
