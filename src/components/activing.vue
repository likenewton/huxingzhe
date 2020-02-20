<template>
  <div class="clearfix activing-container">
    <div class="banner"></div>
    <div class="card shadow" style="padding: 21px 0 21px">
      <div style="padding: 0 15px">
        <v-title title="填写激活信息"></v-title>
        <p class="decoration">* 请放心填写，上述信息只作为紧急时刻通知、救援使用</p>
      </div>
      <van-form @submit="onSubmit" ref="form">
        <van-field v-model="username" name="username" label="车主姓名" placeholder="请输入真实姓名" :rules="userNameRules" />
        <van-field v-model="brand_name" name="brand_name" label="车辆品牌" placeholder="请选择车辆品牌" disabled is-link @click="showMutiPicker=true" :rules="brandNameRules" />
        <van-field v-model="autocar_tag" name="autocar_tag" label="车牌号" placeholder="请输入车牌号" disabled is-link :rules="autocarTagRules" />
        <van-field v-model="autocar_buy_time" name="autocar_buy_time" label="购车日期" placeholder="请选择购车日期" disabled is-link @click="showTimePicker=true" :rules="autocarBuyTimeRules" />
      </van-form>
    </div>
    <div class="bind-btn btn-color shadow-green" :class="{'btn-disabled': !checked}" @click="submitForm">
      <span class="text">立即激活使用</span>
    </div>
    <div class="decoration-wrapper">
      <van-checkbox v-model="checked" shape="square" checked-color="#34bb97" icon-size="14px" label-disabled>
        <span style="letter-spacing: -.01rem">激活及表示阅读并同意《</span>
        <span class="link">产品服务免责声明&隐私协议</span>
        <span>》</span>
      </van-checkbox>
    </div>
    <!-- 时间下拉选择 -->
    <van-action-sheet v-model="showTimePicker" title="选择购车日期">
      <div class="content">
        <van-datetime-picker v-model="currentDate" type="date" />
      </div>
    </van-action-sheet>
    <!-- 车辆品牌练级选择 -->
    <van-action-sheet v-model="showMutiPicker" title="选择车辆品牌">
      <div class="content">
        <van-picker show-toolbar :columns="columns" />
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  data() {
    this.userNameRules = [{ required: true, message: ' ' }]
    this.brandNameRules = [{ required: true, message: ' ' }]
    this.autocarTagRules = [{ required: true, message: ' ' }]
    this.autocarBuyTimeRules = [{ required: true, message: ' ' }]
    return {
      showMutiPicker: false,
      showTimePicker: false,
      checked: true,
      username: '',
      brand_name: '',
      autocar_tag: '',
      autocar_buy_time: '',
      columns: [{
        text: '浙江',
        children: [{
          text: '杭州',
        }, {
          text: '温州',
        }]
      }, {
        text: '福建',
        children: [{
          text: '福州',
        }, {
          text: '厦门',
        }]
      }]
    }
  },
  mounted() {
    _axios.send({
      method: 'post',
      url: _axios.ajaxAd.getAutocarBrand,
      data: {
        parent_id: 1,
      },
      done: ((res) => {
        console.log(res)
        cb && cb(res)
      })
    })
  },
  methods: {
    // 点击提交按钮
    submitForm() {
      if (!this.checked) return
      this.$refs.form.submit()
    },
    // 验证通过提交表单
    onSubmit(values) {
      console.log('submit', values)
    },
    // 验证失败
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    },
  },
}
</script>
<style lang="scss">
.activing-container {
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
    border-radius: 3px;
    background: #fff;

    .decoration {
      color: $green;
      font-size: 9px;
      margin-top: 7px;
      margin-bottom: 14px;
    }
  }

  .bind-btn {
    margin-left: 30px;
    margin-top: 27px;
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

  .decoration-wrapper {
    margin-top: 14px;
    display: flex;
    justify-content: center;

    span {
      font-size: 12px;
      color: #666;
      vertical-align: top;
    }

    .link {
      color: $green;
      text-decoration: underline;

      &:active {
        color: #1c9e72;
      }
    }
  }
}
</style>