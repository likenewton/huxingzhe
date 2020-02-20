// [chunk1](公共页面)
const Unbind = r => require.ensure([], () => r(require('@/components/unbind.vue')), 'chunk1') // 未绑定页面
const Binding = r => require.ensure([], () => r(require('@/components/binding.vue')), 'chunk1') // 正在绑定页面
const BindSuc = r => require.ensure([], () => r(require('@/components/bindSuc.vue')), 'chunk1') // 绑定成功页面
const Activing = r => require.ensure([], () => r(require('@/components/activing.vue')), 'chunk1') // 正在激活页面
const Binded = r => require.ensure([], () => r(require('@/components/binded.vue')), 'chunk1') // 已绑定页面

let router = new VueRouter({
  routes: [{
    path: '/unbind',
    name: 'unbind',
    component: Unbind
  }, {
    path: '/binding',
    name: 'binding',
    component: Binding
  }, {
    path: '/bindSuc',
    name: 'bindSuc',
    component: BindSuc
  }, {
    path: '/activing',
    name: 'activing',
    component: Activing
  }, {
    path: '/binded',
    name: 'binded',
    component: Binded
  }]
})

export default router