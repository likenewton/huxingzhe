import { token } from './static.js'
import { getCookie } from './unit.js'

class AXIOS {
  constructor(para) {
    this.data = {
      method: 'get',
      params: null,
      timeout: 60000,
      data: null, // 请求体所带的参数
      done: null, // 接口请求成功回调函数
    }
    // 实例化时初始的参数
    this.constData = Object.assign(this.data, para)

    // ajax请求地址
    this.ajaxAd = {
      getLoginInfo: '/fc/api/sso/getLoginInfo',
      getAutocarBrand: '/xiaodaonline/api/device/autocar', // 获取汽车品牌
    }
  }

  send(para) {
    let data = Object.assign({}, this.constData, para)

    axios({
      method: data.method,
      url: data.url,
      data: data.data,
      params: data.params,
      timeout: data.timeout,
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then(res => {
      // 这里要根据状态码来对不同的响应状态做处理
      if (res.data.status === 0) {
        return data.done && data.done(res.data)
      } else {
        // 请求正常返回,但是不符合预期
      }
    }).catch(error => {
      // 请求异常
      console.log(error)
    })
  }

  static init(para) {
    return new AXIOS(para)
  }
}

export default AXIOS