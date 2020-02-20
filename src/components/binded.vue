<template>
  <div class="clearfix binded-container">
    <div class="banner">
      <span class="btn btn-change-device">更换设备</span>
    </div>
    <div class="card-wrapper">
      <!-- 未激活 -->
      <div v-if="!isActive" class="card shadow">
        <p class="decoration"><span>“</span>亲爱的车主，仅差一步，激活产品后即可免费享受一年护行服务</p>
        <div class="active-btn btn-color shadow-green" @click="$router.push({name:'activing'})">立即激活使用</div>
      </div>
      <!-- 已激活 -->
      <div v-if="isActive" class="card-list">
        <!-- 第一个为固定官方护行者卡片 -->
        <div class="card-item guanfang shadow">
          <div class="avatar">
            <img src="../assets/images/v.png" class="v">
          </div>
          <div class="text">官方护行者</div>
        </div>
        <!-- 已添加的护行者卡片 -->
        <div class="card-item added shadow" v-for="(item, index) in hxzList">
          <div class="avatar">
            <img :src="item.image" class="bg">
            <span class="relation" :style="{background: relation[item.relation].color}">{{relation[item.relation].text}}</span>
          </div>
          <div class="name ellipsis">{{item.name}}</div>
          <div class="phone">{{item.phone}}</div>
        </div>
        <!-- 可添加护行者卡片 -->
        <div class="card-item no-add shadow" v-for="item in addNumbs">
          <div class="avatar"></div>
          <div class="text">添加护行者</div>
        </div>
      </div>
    </div>
    <div class="hxz-explain-wrapper">
      <div style="padding: 0 15px 0">
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
    <div class="mid-banner">
      <img src="../assets/images/anli.png">
    </div>
    <!-- 日志 -->
    <div class="hxz-log">
      <div style="padding: 0 15px 0">
        <v-title title="护行者日志"></v-title>
      </div>
      <div class="log-list clearfix">
        <div v-if="logs && logs.length > 0" class="log shadow" v-for="(log, index) in logs">
          <div class="title">
            <span class="logo" :style="{background: gsensorLevel[log.gsensor_level].color}"></span>
            <span class="text">{{gsensorLevel[log.gsensor_level].text}}</span>
          </div>
          <div class="time">
            <span class="logo"></span>
            <span class="text">{{log.resource_time}}</span>
          </div>
          <div class="address">
            <span class="logo"></span>
            <span class="text">{{log.gps_point}}</span>
          </div>
        </div>
        <!-- 无日志 -->
        <div v-if="!logs || logs.length === 0" class="no-logs">
          <div class="left fbs-left">
            <img src="../assets/images/wujilu.png" alt="">
          </div>
          <div class="right fbs-right">
            <div class="main-text">暂无纪录</div>
            <div class="sub-text">道路千万条，安全第一条</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // 当前页面有两种状态，激活/未激活
    return {
      isActive: false, // 是否激活护行者
      maxAddNumbs: 3, // 能都添加护行者的数量
      logs: [], // 护行者日记列表
      hxzList: [],
    }
  },
  mounted() {
    this.hxzList = [{
      image: require('../assets/images/avatar.jpg'),
      name: '尹怡',
      phone: '13418801486',
      relation: 1
    }, {
      image: require('../assets/images/avatar.jpg'),
      name: '朱曼',
      phone: '13875638249',
      relation: 2
    }]
    this.logs = [{
      gsensor_level: 3,
      resource_time: '2019/12/23 12:23:12',
      gps_point: '广东省深圳市南上区博讯大厦'
    }]
  },
  methods: {

  },
  computed: {
    addNumbs() {
      return this.maxAddNumbs - this.hxzList.length >= 0 ? this.maxAddNumbs - this.hxzList.length : 0
    }
  }
}
</script>
<style lang="scss">
.binded-container {
  padding-bottom: 50px;

  .banner {
    position: relative;
    width: 100%;
    height: 265px;
    background: url('../assets/images/bg.png') no-repeat;
    background-size: contain;

    .btn {
      position: absolute;
      display: flex;
      right: 13.5px;
      top: 133px;
      width: 90px;
      height: 20px;
      border-radius: 10px;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      font-size: 12px;
      justify-content: center;
      align-items: center;
    }
  }

  .card-wrapper {
    position: relative;
    width: 345px;
    margin-left: 15px;
    margin-top: -104px;

    // 未激活
    .card {
      padding: 20px 26px;
      min-height: 103px;
      border-radius: 3px;
      background: #fff;

      .decoration {
        position: relative;
        text-indent: 2em;
        color: #666;
        font-size: 12px;
        line-height: 19px;

        span {
          color: #aaa;
          position: absolute;
          font-size: 60px;
          top: 8px;
          left: -30px;
        }
      }

      .active-btn {
        margin-left: 53px;
        margin-top: 12px;
        width: 185px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        font-size: 15px;
      }
    }

    // 已激活
    .card-list {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .card-item {
        width: 82px;
        background: #fff;
        height: 100px;
        border-radius: 3.5px;
        text-align: center;

        .avatar {
          position: relative;
          width: 40px;
          height: 40px;
          background-size: contain;
          margin: 14px auto 0;
        }

        .text {
          width: 100%;
          font-size: 12px;
          color: #383838;
          margin-top: 17px;
        }

        &.guanfang {
          .avatar {
            background-image: url('../assets/images/guanfang.png');

            .v {
              position: absolute;
              width: 16px;
              height: 16px;
              bottom: -7px;
              left: 23px;
            }
          }
        }

        &.added {
          .avatar {
            .bg {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }

            .relation {
              position: relative;
              color: #fff;
              font-size: 9px;
              padding: 0.5px 6px;
              border-radius: 2.5px;
              top: -12px;
            }
          }

          .name {
            font-size: 12px;
            color: #383838;
            margin-top: 8px;
            font-weight: bold;
          }

          .phone {
            font-size: 10px;
            color: #666;
            margin-top: 0;
          }
        }

        &.no-add {
          .avatar {
            background-image: url('../assets/images/tianjia.png');
          }
        }
      }
    }
  }

  .hxz-explain-wrapper {
    margin-top: 18px;
    background: #fff;

    .banner {
      width: 100%;
      height: 114px;
      background: url('../assets/images/shuoming_chahua.png') no-repeat;
      background-size: cover;
    }

    .text-wrapper {
      padding: 8px 26px 16px;
      font-size: 12px;
      line-height: 19px;
      color: #666;
    }
  }

  .mid-banner {
    width: 100%;
    padding: 0 15px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .hxz-log {
    margin-top: 18px;
    background: #fff;

    .log-list {
      padding: 15px;

      .log {
        position: relative;
        width: 100%;
        padding: 15px;

        .text {
          color: #9c9c9c;
          font-size: 12px;
          margin-left: 3px;
          line-height: 21px;
        }

        .logo {
          position: relative;
          display: inline-block;
          width: 16px;
          height: 16px;
          background-size: cover;
          top: 4px;
        }

        .title {
          .logo {
            border-radius: 50%;
            margin: 3px;
            width: 10px;
            height: 10px;
          }

          .text {
            color: #666;
            font-weight: bold;
          }
        }

        .time {
          .logo {
            background-image: url("../assets/images/time.png");
          }
        }

        .address {
          .logo {
            background-image: url("../assets/images/didian.png");
          }
        }
      }

      .no-logs {
        padding: 0 15px;

        .left {
          width: 75px;
          height: 75px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .right {
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 75px;

          .main-text {
            font-size: 14px;
            font-weight: bold;
            color: #686868;
          }

          .sub-text {
            color: #9c9c9c;
            font-size: 12px;
          }
        }
      }
    }
  }

}
</style>