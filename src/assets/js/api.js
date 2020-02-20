// rem布局. 1rem在屏幕>=750时为100px, <750按比例缩小, 在750像素的ui设计稿上量出的尺寸/100即可
// let REM = function(win) {
//   let winDoc = win.document
//   let winDocDoc = winDoc.documentElement
//   let psdW = 750 / 100
//   let evtFn = 'orientationchange' in win ? 'orientationchange' : 'resize'
//   let setSize = function() {
//     let pageW = winDocDoc.clientWidth || 320
//     pageW > 750 && (pageW = 750)
//     winDocDoc.style.fontSize = pageW / psdW + 'px'
//   }
//   setSize()
//   win.addEventListener(evtFn, setSize)
//   winDoc.addEventListener('DOMContentLoaded', setSize)
// }
// REM(window)

import STATIC from './static.js'
import UNITS from './unit.js'
import AXIOS from './axios.js'

export default {
  STATIC, // 静态文件
  UNITS, // 工具函数
  AXIOS
}