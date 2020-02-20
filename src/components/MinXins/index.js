import Api from 'assets/js/api.js'
import { mapState, mapMutations } from 'vuex'

// 全局混入对象
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapState({
      userInfo: 'userInfo',
      relation: 'relation',
      gsensorLevel: 'gsensorLevel',
    }),
    routeName() {
      return this.$route.name
    },
  }
}