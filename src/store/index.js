import getters from './getter'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  // 用户信息
  userInfo: {
    name: 'Newton'
  },
  // 碰撞等级
  gsensorLevel: {
    '1': {
      color: '#ffb933',
      text: '疑似轻度碰撞'
    },
    '2': {
      color: '#ffb447',
      text: '疑似中度碰撞'
    },
    '3': {
      color: '#ff5353',
      text: '疑似重度碰撞'
    },
  },
  relation: {
    '1': {
      color: '#ffb933',
      text: '妻子'
    },
    '2': {
    	color: '#fa7578',
    	text: '妈妈'
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})