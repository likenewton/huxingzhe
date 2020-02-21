<template>
  <div class="popup-mask" v-if="showPopup">
    <div class="popup-content">
      <div class="title">{{title}}</div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer">
          <div class="left-btn btn-anti-color" @click="cancel">取消</div>
          <div class="right-btn btn-color" @click="makeSure">确认</div>
        </slot>
      </div>
      <img class="close" :src="closeImage" @click="cancel()">
    </div>
  </div>
</template>
<script>
export default {
  name: 'vPopup',
  data() {
    return {
      showPopup: false,
      closeImage: require('../../assets/images/guanbi.png')
    }
  },
  props: {
    title: {
      type: 'string',
      default: '标题'
    },
  },
  mounted() {

  },
  methods: {
    show() {
      this.showPopup = true
    },
    hide() {
      this.showPopup = false
    },
    cancel() {
      this.hide()
      this.$emit('cancel')
    },
    makeSure() {
      this.$emit('makeSure')
    },
  },
}
</script>
<style lang="scss">
.popup-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);

  .popup-content {
    padding: 15px;
    position: fixed;
    width: 300px;
    background: #fff;
    border-radius: 9px;
    left: 37.5px;
    top: 35%;
    transform: translateY(-35%);

    .title {
      text-align: center;
      font-size: 17px;
      color: #333;
      height: 45px;
      line-height: 45px;
    }

    .content {
      padding: 10px;
      font-size: 012px;
      color: #333;
    }

    .footer {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: space-around;

      .left-btn,
      .right-btn {
        width: 115px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border-radius: 15px;
        display: inline-block;

        &.btn-anti-color {
          line-height: calc(28px);
        }
      }
    }
  }

  .close {
    position: absolute;
    width: 36px;
    height: 36px;
    left: 50%;
    margin-left: -18px;
    bottom: -64px;
  }
}
</style>