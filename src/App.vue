<template>
  <div id="app">
    <div class="page-container clearfix">
      <router-view />
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {}
}

</script>
<style lang="scss">
@import '../src/assets/style/base.scss';

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .page-container {
    margin: 0 auto;
    height: 100%;
    max-width: 375px;
    background: #fff;
  }
}

</style>
