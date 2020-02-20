module.exports = {
  // === 格式、约束 start ===
  formatDate(date, fmt) { // 格式时间
    date = new Date(date);
    let timeString = fmt || 'yyyy-mm-dd hh:ff:ss';
    let getFullYear = String(date.getFullYear());

    function padLeftZero(str) {
      var padLeft = '00';
      return (padLeft + str).substr(str.length);
    }

    // 如果存在至少一个y
    if (/(y+)/.test(timeString)) {
      // RegExp.$1 为匹配第一个大括号的内容
      timeString = timeString.replace(RegExp.$1, getFullYear.substr(4 - RegExp.$1.length));
    }
    let o = {
      'm+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'f+': date.getMinutes(),
      's+': date.getSeconds(),
    };
    for (var k in o) {
      if (new RegExp(`(${k})`).test(timeString)) {
        let str = String(o[k]);
        timeString = timeString.replace(RegExp.$1, str.length == 1 ? padLeftZero(str) : str);
      }
    }
    return timeString;
  },

  validatorPhoneNumber(value) { // 验证电话号码
    return /^1[3|4|5|6|8|9][0-9]\d{8}$/.test(value)
  },
  // === 格式化 end ===

  // === 工具 start ===
  getQuery(attr) { // 获取查询字符串
    let href = location.href
    let queryStr = href.substr(href.indexOf('?') + 1)
    let queryArr = queryStr.split('&')
    let queryObj = {}
    queryArr.forEach(v => {
      let tplArr = v.split('=')
      queryObj[tplArr[0]] = tplArr[1]
    })
    if (attr) return queryObj[attr]
    else return queryObj
  },

  setCookie(cname, cvalue, exhours) { // 设置cookie
    let expires = 'expires='
    if (exhours) {
      let d = new Date()
      d.setTime(d.getTime() + (exhours * 60 * 60 * 1000))
      expires += d.toUTCString()
      document.cookie = `${cname}=${cvalue};${expires};path=/`
    } else {
      document.cookie = `${cname}=${cvalue};path=/`
    }
  },

  getCookie(attr) { // 获取cookie
    let cookieStr = document.cookie
    let cookieArr = cookieStr.split(';')
    let cookieObj = {}
    cookieArr.forEach((v) => {
      let tplArr = v.split('=')
      while (tplArr[0].charAt(0) === ' ') {
        tplArr[0] = tplArr[0].substring(1)
      }
      cookieObj[tplArr[0]] = tplArr[1]
    })
    if (attr) return cookieObj[attr]
    else return cookieObj
  },

  exportExcel(url, params = {}) { // 导出excel
    let link = `${url}?iov-token=${this.getCookie('iov-token')}`
    for (let key in params) {
      if (params[key]) {
        link += `&${key}=${params[key]}`
      }
    }
    window.open(link, '_self')
  },
  // === 工具 end ===

}
