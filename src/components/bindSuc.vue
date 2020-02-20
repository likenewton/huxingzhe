<template>
  <div class="clearfix bindSuc-container">
    <div class="info-wrapper">
      <img src="../assets/images/chengong.png" alt="">
      <div class="title">设备激活成功</div>
      <p>赠送48G流量已到账，请注意查收</p>
    </div>
    <div class="banner-wrapper">
      <div class="title">功能介绍</div>
      <img class="banner" src="../assets/images/banner1.png" alt="">
      <img class="banner" src="../assets/images/banner2.png" alt="">
      <img class="banner" src="../assets/images/banner3.png" alt="">
      <div class="btn-wrapper">
        <div class="btn-anti-color to-home">返回首页</div>
        <div class="btn-color shadow-green to-active">
          <img src="../assets/images/jihuo.png" alt="">  
          <span>激活护行者产品</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style lang="scss">
.bindSuc-container {
  background: #ececec;

  .info-wrapper {
    width: 100%;
    height: 150px;
    background: #fff;
    text-align: center;

    .title {
      font-size: 17px;
      color: #383838;
      font-weight: bold;
      line-height: 30px;
    }

    p {
      color: #666;
    }

    img {
      width: 60px;
      height: 60px;
      margin-top: 20px;
    }
  }

  .banner-wrapper {
    margin-top: 8px;
    background: #fff;
    padding: 0 15px 20px;
    overflow: hidden;

    .title {
      font-size: 17px;
      color: #383838;
      margin-top: 20px;
      font-weight: bold;
    }

    .banner {
      width: 100%;
      height: 85px;
      margin-top: 10px;
    }

    .btn-wrapper {
      padding-top: 28px;

      .to-home {
        display: inline-block;
        width: 115px;
        height: 40px;
        line-height: 40px;
        vertical-align: top;
        border-radius: 20px;
        font-size: 14px;
      }

      .to-active {
        float: right;
        width: 180px;
        height: 40px;
        line-height: 40px;
        vertical-align: top;
        border-radius: 20px;

        img {
          width: 22px;
          height: 22px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>