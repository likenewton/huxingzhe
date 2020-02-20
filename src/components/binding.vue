<template>
  <div class="clearfix binding-container">
    <div class="banner"></div>
    <div class="card shadow">
      <van-form @submit="onSubmit" ref="form">
        <van-field v-model="phone" name="phone" label="手机号" placeholder="请输入11位手机号" :rules="phoneRules" />
        <div class="send-sms btn-anti-color">获取验证码</div>
        <van-field v-model="code" name="code" label="验证码" placeholder="请填写验证码" :rules="codeRules" />
      </van-form>
    </div>
    <div class="bind-btn btn-color shadow-green" :class="{'btn-disabled': !checked}" @click="submitForm">
      <span class="text">立即绑定，领取权益</span>
    </div>
    <div class="decoration-wrapper">
      <van-checkbox v-model="checked" shape="square" checked-color="#34bb97" icon-size="14px" label-disabled>
        <span style="letter-spacing: -.01rem">激活及表示阅读并同意《</span>
        <span class="link">产品服务免责声明&隐私协议</span>
        <span>》</span>
      </van-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    this.phoneRules = [
      { required: true, message: ' ' },
      { validator: this.phoneValidator, message: '手机号格式错误' },
    ];
    this.codeRules = [
      { required: true, message: ' ' },
      { validator: this.codeValidator, message: '验证码格式错误' },
    ];
    return {
      code: '',
      phone: '',
      checked: true,
    }
  },
  mounted() {

  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    phoneValidator(val) {
      return /1\d{10}/.test(val)
    },
    // 校验函数返回 Promise 来实现异步校验
    codeValidator(val) {
      return /\d{6}/.test(val)
    },
    // 点击提交按钮
    submitForm() {
      if (!this.checked) return
      this.$refs.form.submit()
    },
    // 验证通过提交表单
    onSubmit(values) {
      console.log('submit', values)
      this.$router.push({ name: 'binded' })
    },
    // 验证失败
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    },
  },
}
</script>
<style lang="scss">
.binding-container {
  padding-bottom: 50px;

  .banner {
    width: 100%;
    height: 305px;
    background: url('../assets/images/liuliang.png') no-repeat;
    background-size: cover;
  }

  .card {
    position: relative;
    margin-left: 15px;
    margin-top: calc(263px - 305px);
    width: 345px;
    min-height: 136px;
    border-radius: 10px;
    padding: 21px 20px;
    background: #fff;

    .text-wrapper {
      font-size: 12px;
      line-height: 18px;
      color: #666;
    }

    .send-sms {
      position: absolute;
      min-width: 75px;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      z-index: 1;
      right: 20px;
      margin-top: 10px;
      font-size: 12px;
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