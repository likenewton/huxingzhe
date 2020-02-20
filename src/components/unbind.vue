<template>
  <div class="clearfix unbind-container">
    <div class="banner"></div>
    <div class="card shadow">
      <div style="padding: 21px 20px 0">
        <v-title title="护行者说明"></v-title>
      </div>
      <div class="banner"></div>
      <div class="text-wrapper">
        <span class="left fbs-left">1、</span>
        <span class="right fbs-right">当车辆疑似发生严重碰撞时，后台将及时通知给护行者</span>
        <span class="left fbs-left">2、</span>
        <span class="right fbs-right">同时官方护行者会第一时间与车主取得联系，确认生命安全及提供救援服务</span>
      </div>
    </div>
    <div class="img-wrapper">
      <img v-if="bindStatus===1" src="../assets/images/chahua.png" alt="" class="mid-img">
      <img v-else src="../assets/images/shibai.png" alt="" class="mid-img">
    </div>
    <!-- 提示说明 -->
    <p v-if="bindStatus===1" class="decoration">
      <span>“</span>亲爱的车主，您还未绑定激活设备，暂时无法为您提供护行服务。请打开设备的个人中心App，微信扫码绑定
    </p>
    <p v-else class="decoration">
      <span>“</span>非常抱歉！您当前绑定的设备能力不支持护行者功能服务
    </p>
    <!-- 按钮 -->
    <div v-if="bindStatus===1 || bindStatus===2" class="scan-btn btn-color shadow-green" @click="$router.push({name: 'binding'})">
      <img src="../assets/images/sama.png" alt="" style="width: 22px;height: 22px;margin-right: 6px">
      <span class="text">{{bindStatus===1 ? '扫码绑定设备' : '绑定其它设备'}}</span>
    </div>
    <div v-if="bindStatus===3" class="btn-wrapper">
      <div class="btn scan-btn btn-color shadow-green" @click="$router.push({name: 'binding'})">
        <img src="../assets//images/guanlian.png" alt="" style="width: 22px;height: 22px;margin-right: 4px">
        <span class="text">绑定其它设备</span>
      </div>
      <div class="btn scan-btn btn-color shadow-green" @click="changeDevice">
        <img src="../assets/images/genghuan.png" alt="" style="width: 22px;height: 22px;margin-right: 4px">
        <span class="text">更换设备</span>
      </div>
    </div>
    <!-- popup 更换设备 -->
    <v-popup title="请选择设备" ref="device_choice_popup">
      <div class="device-list">
        <div class="device-item">
          <span>智能车机01</span>
          <img src="../assets/images/chengong.png" alt="">
        </div>        
      </div>
      <template v-slot:footer>
        <div class="left-btn btn-anti-color" @click="bindNewDevice">绑定新设备</div>
        <div class="right-btn btn-color" @click="makeSureChange">确认更换</div>
      </template>
    </v-popup>
  </div>
</template>
<script>
export default {
  data() {
    // 当前页面有三种状态： 1 未绑定任何设备、2 绑定的设备能力均不满足要求、3 绑定的设备中有符合要求的(当前绑定设备不符合)
    // 第四种状态会跳转到binded页面 4 当前绑定的设备符合能力要求
    return {
      bindTotalNumbs: 2, // 绑定的所有设备数量
      bindValidNumbs: 1, // 绑定的有效设备数量
      deviceList: [],
    }
  },
  mounted() {

  },
  methods: {
    bindNewDevice() {
      this.$router.push({ name: 'binding' })
    },
    makeSureChange() {
      this.$router.push({ name: 'binded' })
    },
    changeDevice() {
      this.$refs.device_choice_popup.show()
    }
  },
  computed: {
    bindStatus() {
      if (this.bindTotalNumbs === 0) return 1
      if (this.bindTotalNumbs > 0 && this.bindValidNumbs === 0) return 2
      else return 3
    }
  }
}
</script>
<style lang="scss">
.unbind-container {
  padding-bottom: 50px;

  .banner {
    width: 100%;
    height: 265px;
    background: url('../assets/images/bg.png') no-repeat;
    background-size: contain;
  }

  .card {
    margin-left: 15px;
    margin-top: -122px;
    width: 345px;
    height: 220px;
    border-radius: 3px;
    background: #fff;

    .banner {
      width: 100%;
      height: 105px;
      background: url('../assets/images/shuoming_chahua.png') no-repeat;
      background-size: contain;
    }

    .text-wrapper {
      padding: 8px 15px 21px;
      font-size: 12px;
      line-height: 18px;
      color: #666;
    }
  }

  .img-wrapper {
    text-align: center;
    margin-top: 23px;

    .mid-img {
      width: 230px;
      height: 135px;
    }
  }

  .decoration {
    position: relative;
    text-indent: 2em;
    color: #666;
    font-size: 13px;
    line-height: 19px;
    padding: 10px 20px 0;

    span {
      color: #aaa;
      position: absolute;
      font-size: 60px;
      top: 18px;
      left: -9px;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px 15px 0;

    .btn {
      width: 150px;
      height: 45px;
      margin: 0;

      .text {
        font-size: 15px;
      }
    }
  }

  .scan-btn {
    margin-left: 30px;
    margin-top: 20px;
    width: 315px;
    height: 45px;
    border-radius: 22.5px;
    line-height: 45px;

    .text {
      vertical-align: top;
      display: inline-block;
      font-size: 17px;
    }
  }

  .device-list {

    .device-item {
      height: 40px;
      line-height: 40px;

      img {
        width: 28px;
        height: 28px;
        float: right;
        margin-top: 6px;
      }
    }
  }
}
</style>