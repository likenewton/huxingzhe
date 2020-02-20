<template>
  <div class="title-container">{{title}}</div>
</template>
<script>
export default {
  name: 'vTitle',
  data() {
    return {}
  },
  props: {
    title: {
      type: 'string',
      default: '标题'
    },
  },
}
</script>
<style lang="scss">
.title-container {
  height: 17px;
  line-height: 17px;
  padding-left: 9px;
  font-size: 14px;
  border-left: 3px solid $green;
}
</style>